'use strict';

import { category } from "./elems.js";
import { getCategory } from "./serbiceAPI.js";


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
}