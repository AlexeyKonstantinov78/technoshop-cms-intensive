'use strict';

import { modalBtn, modal } from './elems.js';
import { formControllers } from './formController.js';
import { modalController } from './modalControler.js';
import { previewControler } from './previewController.js';
import { sortControler } from './sortController.js';
import { tableController } from './tableController.js';

const init= () => {
    modalController({        
        modalBtn,         
    });
    
    previewControler();
    tableController();
    formControllers();
    sortControler();
}

init();