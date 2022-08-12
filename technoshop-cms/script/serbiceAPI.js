'use strict';

import { API_URI } from './const.js';

const getGoods = async (id) => {
    // return await fetch(`${API_URI}goods/?nopage=true`)
    //     .then(response => response.json());

    const response = await fetch(`${API_URI}api/goods/${id ? id: '?nopage=true'}`);

    if (response.ok) {
        return response.json();
    } 
    
    throw new Error(response.status);
};

const getCategory = async () => {
    const response = await fetch(`${API_URI}api/category`);

    if (response.ok) {
        return response.json();
    } 
    
    throw new Error(response.status);
}

const postGoods = async (data) => {
    
    const response = await fetch(`${API_URI}api/goods`, {
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
};

const deleteGoods = async (id) => {
  const response = await fetch(`${API_URI}api/goods/${id}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
    },    
  });

  if (response.ok) {
    return !!response.json();
  } 

  throw new Error(response.status);
};

const editGoods = async (data) => {
    
  const response = await fetch(`${API_URI}api/goods/${data.identificator}`, {
      method: 'PATCH',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
  });

  if (response.ok) {
      return response.json();
  } 
  
  throw new Error(response.status);
};


export {
    getGoods,
    getCategory,
    postGoods,
    deleteGoods,
    editGoods
}