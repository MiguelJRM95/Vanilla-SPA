import "bootstrap/dist/css/bootstrap.min.css";
import './main.scss';

import {router} from './router/index.routes'

const __HOME = '#/';

window.onload = () => {router(__HOME)};
window.addEventListener('hashchange', ()=>{
    router(window.location.hash);
})