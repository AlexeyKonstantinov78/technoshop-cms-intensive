'use strict';

import { getGoods } from "./serbiceAPI.js";
import { tableRender } from "./tableViewer.js";

export const tableController = async () => {

    const goods = await getGoods();
    tableRender(goods);
};