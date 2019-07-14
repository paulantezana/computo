export const SnVideoOverlay = () => {
    let btns = document.querySelectorAll('.SnVideoOverlayBtn');
    let overlay = document.querySelectorAll('.SnVideoOverlay');

    // Each btns
    btns.forEach( item => {
        let trigger = item.dataset.overlaytrigger;

        // Each overlays
        overlay.forEach(over=>{
            let overl = over.dataset.overlay;

            // validate
            if(overl === trigger){

                // Listener
                item.addEventListener('click', () => {
                    over.classList.add('show')
                });
                over.addEventListener('click', () => {
                    over.classList.remove('show')
                });
            }
        })
    });
}