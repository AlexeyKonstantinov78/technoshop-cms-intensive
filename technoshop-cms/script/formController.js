'use strict';

import { category, form, modal } from "./elems.js";
import { closeModal } from "./modalControler.js";
import { showPreview } from "./previewController.js";
import { editGoods, getCategory, getGoods, postGoods } from "./serbiceAPI.js";
import { renderRow, editRow } from "./tableViewer.js";
import { toBase64 } from './utils.js';
import { API_URI } from "./const.js";


const updateCategory = async () => {
  category.textContent = '';
  const categoryList = await getCategory();  
  const categoryOption = categoryList.map(cat => {
    const option = document.createElement('option');
    option.value = cat;
    return option;
  });  
  category.append(...categoryOption);
};

const formControllers = () => {
  updateCategory();

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);
    
    const data = {};

    for (const [key, val] of formData) {
      if(val) {
        data[key] = val;
      }      
    }

    if (data.image.size) {
      data.image = await toBase64(data.image);
    } else {
      delete data.image;
    }

    if (data.imagesave) {
      const goods = await editGoods(data);
      editRow(goods);
    } else {
      const goods = await postGoods(data);
      renderRow(goods);
    }
    
    updateCategory();
    closeModal(modal, 'd-block');
    
  }); 
};

const fillingForm = async (id) => {
  const {title, category, description, display, price, image} = await getGoods(id);
  
  form.title.value = title;
  form.category.value = category;
  form.description.value = description.join('\n');
  form.display.value = display;
  form.price.value = price;
  form.imagesave.value = image;
  form.identificator.value = id
  showPreview(`${API_URI}${image}`);  
};

export {
  formControllers,
  fillingForm
};