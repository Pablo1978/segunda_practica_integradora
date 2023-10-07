async function addProduct(id) {

  const cart = document.cookie.split("=")[1];
  const response = await fetch(`/api/carts/${cart}/products/${id}`, {
    method: "PUT",
  });
  const result = await response.json();
  console.log(result);
}
