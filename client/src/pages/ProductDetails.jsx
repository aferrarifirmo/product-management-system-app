import { useEffect, useState, useCallback } from "react";
import { getProductById } from "../utils/apiServices";

const ProductDetails = ( {trackId} ) => {

  useEffect(() => {
    console.log(trackId);
  }, [trackId]);

  const [product, setProduct] = useState([]);

  const fetchProduct = useCallback( () => {
    getProductById(trackId).then(res => setProduct(res));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);
  

  return (
    <h2>Product details: {product.name}</h2>
    // <div className='w-[100%] aspect-square justify-self-center'>
    // </div>
  );
};

export default ProductDetails;