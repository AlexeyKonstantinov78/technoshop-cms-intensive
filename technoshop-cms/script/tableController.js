'use strict';

import { modalController } from "./modalControler.js";
import { getGoods, deleteGoods } from "./serbiceAPI.js";
import { tableRender } from "./tableViewer.js";
import { modal, tableGoods } from "./elems.js";

export const tableController = async () => {

    modalController({              
        delegation: {
            parent: tableGoods,
            target: '.table-goods-item',
            targetExclude: '.btn-delete',
        }
    });

    tableGoods.addEventListener('click', async ({target}) => {
        const delBtn = target.closest('.btn-delete');
        if (delBtn) {
            const row = delBtn.closest('.table-goods-item');
            const isDel = await deleteGoods(row.dataset.id);

            if (isDel) {
                row.remove();
            }
        }
    });

    const goods = await getGoods();
    tableRender(goods);
    
};