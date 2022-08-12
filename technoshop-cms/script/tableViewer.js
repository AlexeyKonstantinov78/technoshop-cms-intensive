'use strict';

import { tableGoods } from './elems.js';
import { currencyFormatRUB } from './utils.js';

const fillingRow = (goodsRow, {id, title, category, price}) => {
  goodsRow.innerHTML = `    
      <td>${id}</td>
      <td>${title}</td>
      <td>${category}</td>
      <td class="text-end">${currencyFormatRUB(price)}</td>
      <td class="d-flex">
      <button class="btn-table btn-delete">
          <svg width="30" height="30">
          <use xlink:href="#delete" />
          </svg>
      </button>
      </td>    
  `;
  return goodsRow;
};

const renderRow = (data) => {        
  const goodsRow = document.createElement('tr');
  goodsRow.classList.add('table-row', 'table-goods-item');
  goodsRow.dataset.id = data.id;

  tableGoods.append(fillingRow(goodsRow, data));
};

const editRow = (data) => {
  const goodsRow = document.querySelector(`[data-id="${data.id}"]`);
  fillingRow(goodsRow, data);
};

const tableRender = (goods) => {
        
    tableGoods.textContent = '';

    goods.forEach(renderRow);
}

export {
  tableRender,
  renderRow,
  editRow
}