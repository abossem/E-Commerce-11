import React, { useState, useCallback, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../services/productService";
import Loading from "../Components/loading/Loading";
import { useCartContext } from "../context/CartContext";
import Button from "../Components/ProductDetailes/Button/Button";
import Select from "../Components/ProductDetailes/Select/Select";
import ProductImages from "../Components/ProductDetailes/ProductImages/ProductImages";
import ProductInfo from "../Components/ProductDetailes/ProductInfo/ProductInfo";
import BuyBox from "../Components/ProductDetailes/BuyBox/BuyBox";
import Reviews from "../Components/ProductDetailes/Reviews/Reviews";
import Notification from "../Components/ProductDetailes/Notification/Notification";

export default function ProductDetails ()
{
  const [ selectedImage, setSelectedImage ] = useState( 0 );
  const [ quantity, setQuantity ] = useState( 1 );
  const [ cartItems, setCartItems ] = useState( 0 );
  const { addItemToCart } = useCartContext();
  const [ showNotification, setShowNotification ] = useState( false );
  const [ product, setProduct ] = useState( null );
  const [ loading, setLoading ] = useState( true );
  const [ error, setError ] = useState( null );
  const { productId } = useParams();

  useEffect( () =>
  {
    const fetchProduct = async () =>
    {
      try
      {
        const productData = await fetchProductById( productId );
        setProduct( productData );
      } catch ( error )
      {
        console.error( "Error fetching product:", error );
        setError( "Failed to fetch product details. Please try again later." );
      } finally
      {
        setLoading( false );
      }
    };
    fetchProduct();
  }, [ productId ] );

  const buyNow = useCallback( () =>
  {
    console.log( `Buying ${ quantity } item(s) now` );
    alert( `Proceeding to checkout with ${ quantity } item(s)` );
  }, [ quantity ] );

  const handleQuantityChange = useCallback( ( value ) =>
  {
    const newQuantity = parseInt( value, 10 );
    if ( !isNaN( newQuantity ) ) setQuantity( newQuantity );
  }, [] );

  const addToCart = useCallback( () =>
  {
    setCartItems( ( prevItems ) => prevItems + quantity );
    addItemToCart( product, quantity );
    setShowNotification( true );
    setTimeout( () => setShowNotification( false ), 3000 );
  }, [ quantity, product, addItemToCart ] );

  if ( loading ) return <Loading />;
  if ( error ) return <div>{ error }</div>;
  if ( !product ) return <div>Product not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>Electronics</span>
          <span>›</span>
          <span>Tech</span>
          <span>›</span>
          <span>{ product.category }</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          <ProductImages images={ product.images } />
          <ProductInfo product={ product } />
          <BuyBox
            product={ product }
            quantity={ quantity }
            handleQuantityChange={ handleQuantityChange }
            addToCart={ addToCart }
            buyNow={ buyNow }
          />
        </div>

        <Reviews
          reviews={ product.reviews }
          reviews_avg={ product.reviews_avg }
          reviews_count={ product.reviews_count }
        />
      </div>

      { showNotification && (
        <Notification message={ `${ quantity } item(s) added to cart` } />
      ) }
    </div>
  );
}