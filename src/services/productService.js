import axios from 'axios';

const API_BASE_URL = 'https://e-commerce-11-api.vercel.app/api/api'; 

export const fetchProductById = async (productId) => {
  try {
    const response = await axios.get(`https://e-commerce-11-api.vercel.app/api/api/products/${productId}`);
    console.log(response)
    return response.data.data; 
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error; 
  }
};