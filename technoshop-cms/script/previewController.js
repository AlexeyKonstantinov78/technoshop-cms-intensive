'use strict';

import {form, preview} from './elems.js';
import { toBase64 } from './utils.js';

const showPreview = (src) => {
    preview.style.display = 'block';
    preview.src = src;
};

const hidePreview = () => {
    preview.style.display = '';
    preview.src = '';
};

const previewControler = () => {
    const imageFile = form.image;
    image.addEventListener('change', async () => {        
        if (imageFile.files.length) {
            const src = await toBase64(imageFile.files[0]);
            showPreview(src);
        }
    });
};

export {
    previewControler,
    showPreview,
    hidePreview
}

