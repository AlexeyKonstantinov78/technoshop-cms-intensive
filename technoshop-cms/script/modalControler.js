'use strict';

import { hidePreview } from './previewController.js';
import { form } from './elems.js';

const openModal = (modal, classOpen) => {
    modal.classList.add(classOpen);
};

const closeModal = (modal, classOpen) => {
    modal.classList.remove(classOpen);
    form.reset();
    hidePreview();
};

export const modalController = ({modal, modalBtn, classOpen, classClose}) => {  
    
    modalBtn.addEventListener('click', () => {
        openModal(modal, classOpen);
    });

    modal.addEventListener('click', ({target}) => {
        if (target === modal || target.classList.contains(classClose)) {
            closeModal(modal, classOpen);
        }
    });
};

