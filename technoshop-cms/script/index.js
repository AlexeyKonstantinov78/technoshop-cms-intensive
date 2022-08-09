'use strict';

import { modalBtn, modal } from './elems.js';
import { modalController } from './modalControler.js';

console.log(modalBtn);

modalController({
    modal, 
    modalBtn, 
    classOpen: 'd-block',
    classClose: 'btn-close'
})