import axios from 'axios';

export type Product = {
  id: string;
  name: string;
  price: number;
  imgUrl?: string;
}
export type CartItem = {
  id: string;
  qty: number;
}

function getProducts() {
  return fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => data)
}

async function getProducts2() {
  const res = await fetch('http://localhost:3002/product')
  return await res.json();
}
async function getProducts3() {
  const res = await axios('http://localhost:3002/product')
  return res.data;
}

async function addProduct(product: Product) {
  return await fetch('http://localhost:3002/product', {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(product)
  });
}
async function addProduct4Axios(product: Product) {
  return await axios.post('http://localhost:3002/product', product,{
    headers: {
      'Content-Type': 'application/json'
    },
  });
}
async function addItemToCart(item: CartItem) {
  return await axios.post('http://localhost:3002/cart', item,{
    headers: {
      'Content-Type': 'application/json'
    },
  });
}

async function getProduct2(id: string) {
  const res = await fetch(`http://localhost:3002/product/${id}`)
  return await res.json();
}

export {
  getProducts,
  getProducts2,
  getProduct2,
  addProduct,
  addProduct4Axios,
  addItemToCart,
}
