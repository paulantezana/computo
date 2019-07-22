export const SnModal = () => {
    // let modalWrapper = null
    let dataModals = null
    let openModals = []


    let closeModalsOnEsc = () => {
        window.addEventListener('keyup', (event) => {
            if (openModals.length && event.keyCode === 27) {
                api.closeLastModal()
            }
        })
    }

    let closeModal = (m) => {
        m.classList.remove('visible')

        // Re-enable parent scrolling
        document.body.style.overflow = 'auto'
    }

    let api = {
        init() {
            // modalWrapper = document.querySelector('.SnModal-wrapper')
            dataModals = document.querySelectorAll('[data-modal]')
            for (let i = 0; i < dataModals.length; i++) {
                dataModals[i].addEventListener('click', (event) => {
                    let modalName = dataModals[i].dataset.modal
                    api.close(modalName)
                })
            }

            // Modal button trigger open
            let triggers = document.querySelectorAll('[data-modaltrigger]')
            for (let i = 0; i < triggers.length; i++) {
                triggers[i].addEventListener('click', (event) => {
                    let modalName = triggers[i].dataset.modaltrigger
                    api.open(modalName)
                })
            }

            // Modal button close
            let closes = document.querySelectorAll('[data-modalclose]')
            for (let i = 0; i < closes.length; i++) {
                closes[i].addEventListener('click', (event) => {
                    let modalName = closes[i].dataset.modalclose
                    api.close(modalName)
                })
            }

            closeModalsOnEsc()
        },

        open(modalName, cb) {
            let modal = document.querySelector(`[data-modal="${modalName}"]`)

            // If modal is already open, don't do anything
            if (openModals.indexOf(modal) >= 0) return

            if (modal) {
                modal.classList.add('visible')

                // Modal prevent events
                let modalContent = modal.querySelector('.SnModal');
                if (modalContent){
                    modalContent.addEventListener('click', (event) => {
                        event.stopPropagation()
                    })
                }

                // Disable parent scrolling when modal is open
                document.body.style.overflow = 'hidden'

                openModals.push(modal)
            } else {
                console.error('Could not find modal with name "%s"', modalName)
            }

            typeof cb === 'function' && cb()
        },

        close(modalName, cb) {
            let modal = document.querySelector(`[data-modal="${modalName}"]`)
            
            // If modal is already open, don't do anything
            // if (openModals.indexOf(modal) >= 0) return

            if (modal) {
                closeModal(modal)

                openModals.pop(modal)
            } else {
                console.error('Could not find modal with name "%s"', modalName)
            }

            typeof cb === 'function' && cb()
        },

        closeLastModal(cb) {
            let modal = openModals.pop()
            closeModal(modal)
            typeof cb === 'function' && cb()
        },
    }

    window.modal = api
}