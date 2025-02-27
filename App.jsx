import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ProductPage from './pages/ProductPage';

function App() {
  const [product, setProduct] = useState(null); // State to store the product data
  const [loading, setLoading] = useState(true); // State to handle loading state
  const [error, setError] = useState(null); // State to handle errors

  useEffect(() => {
    // Function to fetch product data
    const fetchProduct = async () => {
      try {
        const response = await axios.get('https://e-commerce-11-api.vercel.app/api/api/products/1');
        setProduct(response.data.data); // Set the product data in state
        setLoading(false); // Set loading to false after data is fetched
        console.log('Full Response:', response); // Log the entire response object
        console.log('Product Data:', response.data.data); // Log only the product data
      } catch (err) {
        setError(err.message); // Set error message if something goes wrong
        setLoading(false); // Set loading to false even if there's an error
        console.error('Error:', err); // Log the error
      }
    };

    fetchProduct(); // Call the fetch function
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Display a loading message while fetching data
  }

  if (error) {
    return <div>Error: {error}</div>; // Display an error message if something goes wrong
  }

  return (
    <>
      {/* Pass the product data as a prop to the ProductPage component */}
      <ProductPage product={product} />
    </>
  );
}

export default App;