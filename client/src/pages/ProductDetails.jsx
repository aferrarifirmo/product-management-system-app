import { useEffect, useState, useCallback } from "react";
import { getProductById } from "../utils/apiServices";
import { useParams } from "react-router-dom";

const ProductDetails = () => {

  const { trackId } = useParams();
  const [product, setProduct] = useState();

  
  const fetchProduct = useCallback( () => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    getProductById(trackId).then(res => setProduct(res));
  }, [])
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div>
      {product && 
        <div className='grid justify-items-center'>
        <h1>{product.name}</h1>
        <h1 className='font-serif text-base italic mt-4 text-[#2b343a]'>{product.shortDescription}</h1>
        <div className='grid grid-cols-2 mt-8 w-[80%] bg-zinc-100 py-10'>
          <img className='w-[70%] justify-self-center' alt='farm' src={product.image}></img>
          <div className=''>
            <h3>{product.region}, {product.country}</h3>
          </div>
        </div>
        <h3 className='w-[80%] text-center mt-10 mb-20'>{product.description}</h3>
        </div>
      }
    </div>
  );
};

export default ProductDetails;