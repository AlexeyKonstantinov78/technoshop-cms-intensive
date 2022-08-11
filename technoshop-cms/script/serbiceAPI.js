'use strict';

import { API_URI } from './const.js';

const getGoods = async () => {
    // return await fetch(`${API_URI}goods/?nopage=true`)
    //     .then(response => response.json());

    const response = await fetch(`${API_URI}goods/?nopage=true`);

    if (response.ok) {
        return response.json();
    } 
    
    throw new Error(response.status);
};

const getCategory = async () => {
    const response = await fetch(`${API_URI}category`);

    if (response.ok) {
        return response.json();
    } 
    
    throw new Error(response.status);
}

const postGoods = async (data) => {
    
    const response = await fetch(`${API_URI}goods`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    if (response.ok) {
        return response.json();
    } 
    
    throw new Error(response.status);
}

export {
    getGoods,
    getCategory,
    postGoods
}