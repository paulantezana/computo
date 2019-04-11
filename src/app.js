import './scss/app.scss';
import SNMenu from './components/menu';
import { tns } from 'tiny-slider/src/tiny-slider.module';
import 'tiny-slider/src/tiny-slider.scss';

// Primary Menu
SNMenu({
    menuId: 'PrimaryMenu',
    toggleButtonID: 'PrimaryMenu-toggle',
    toggleClass: 'PrimaryMenu-is-show',
    parentClose: true,
    menuCloseID: 'PrimaryMenu-close',
});

tns({
    container: '#AdmissionSlide',
    items: 1,
    slideBy: 'page',
    autoplay: true
})
