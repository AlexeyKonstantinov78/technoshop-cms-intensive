'use strict';

import { modalBtn, modal } from './elems.js';
import { modalController } from './modalControler.js';
import { previewControler } from './previewController.js';

modalController({
    modal, 
    modalBtn, 
    classOpen: 'd-block',
    classClose: 'btn-close'
})

previewControler();