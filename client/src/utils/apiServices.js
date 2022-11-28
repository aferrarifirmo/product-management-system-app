export const getAllProducts = async () => {
  try {
    console.log('Fetching all products from DB');
    const response = await fetch(process.env.REACT_APP_DB_URL + 'products/');
    return await response.json();
  } catch (err) {
    console.log('Error from getAllProducts in apiServices');
    alert('Unable to get Products');
  };
};

export const getProductById = async (id) => {
  try {
    const response = await fetch(process.env.REACT_APP_DB_URL + 'products/' + id);
    return response.json();
  } catch (err) {
    console.log('Error fetching product by id in apiServices');
    alert('Unable to get Product');
  };
};

export const addNewProduct = async (product) => {
  try {
    const response = await fetch(process.env.REACT_APP_DB_URL + 'products/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(product)
    });
    return response.json();
  } catch (error) {
    console.log('Error from addNewProduct in apiServices')
    alert('Unable to add Product');
  };
};

export const updateProduct = async ({id, body}) => {
  try {
    const response = await fetch(process.env.REACT_APP_DB_URL + 'products/' + id, {
      method: 'PUT',
      headers: { 'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(body)
    });
    return response.json();
  } catch (error) {
    console.log('Error from updateProduct in apiServices')
    alert('Unable to update Product');
  };
};

export const deleteProduct = async (id) => {
  try {
    const response = await fetch(process.env.REACT_APP_DB_URL + 'products/' + id, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json; charset=UTF-8'},
      body: JSON.stringify(id)
    });
    return response.json();
  } catch (error) {
    console.log('Error from deleteProduct in apiServices')
    alert('Unable to delete Product');
  };
};