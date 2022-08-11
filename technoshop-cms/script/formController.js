'use strict';

import { category, form } from "./elems.js";
import { getCategory, postGoods } from "./serbiceAPI.js";
import { toBase64 } from './utils.js';


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

export const formControllers = () => {
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

    const goods = await postGoods(data);
    console.log(goods);
  }); 
};