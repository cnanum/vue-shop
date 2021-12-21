
function getProducts() {
  return fetch('http://localhost:3001/products')
    .then(res => res.json())
    .then(data => data)
}

async function getProducts2() {
  const res = await fetch('http://localhost:3002/product')
  return await res.json();
}

async function getProduct2(id: string) {
  const res = await fetch(`http://localhost:3002/product/${id}`)
  return await res.json();
}

export {getProducts, getProducts2, getProduct2}
