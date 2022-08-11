'use strict';

import { modalBtn, modal } from './elems.js';
import { formControllers } from './formController.js';
import { modalController } from './modalControler.js';
import { previewControler } from './previewController.js';
import { tableController } from './tableController.js';

const init= () => {
    modalController({
        modal, 
        modalBtn, 
        classOpen: 'd-block',
        classClose: 'btn-close'
    })
    
    previewControler();
    tableController();
    formControllers();
}

init();