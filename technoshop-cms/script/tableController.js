'use strict';

import { modalController } from "./modalControler.js";
import { getGoods } from "./serbiceAPI.js";
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

    const goods = await getGoods();
    tableRender(goods);
    
};