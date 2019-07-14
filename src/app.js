import './scss/app.scss';
import { SNMenu, SNActiveMenu } from './components/menu';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import { SnVideoOverlay } from './components/overlay';

import 'tiny-slider/src/tiny-slider.scss';

// Primary Menu
SNMenu({
    menuId: 'PrimaryMenu',
    toggleButtonID: 'PrimaryMenu-toggle',
    toggleClass: 'PrimaryMenu-is-show',
    parentClose: true,
    menuCloseID: 'PrimaryMenu-close',
});

// Video overlay
SnVideoOverlay();

// Active AdmissionMenu 
SNActiveMenu([...document.querySelectorAll('.AdmissionMenu a')]);

// Slide
tns({
    container: "#AdmissionSlide",
    items: 1,
    mouseDrag: true,
    controls: false,
    autoplay: true,
})
