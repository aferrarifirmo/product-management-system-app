import { useEffect, useState, useCallback } from "react";
import { getProductById } from "../utils/apiServices";
import { useParams, Link } from "react-router-dom";

const ProductDetails = () => {

  const { trackId } = useParams();
  const [product, setProduct] = useState();
  
  const fetchProduct = useCallback( () => {
    getProductById(trackId).then(res => setProduct(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  return (
    <div>
      {product &&
      <>
        <div className='grid justify-items-center'>
        <h1>{product.name}</h1>
        <h1 className='font-serif text-base italic mt-0 md:mt-4 text-[#2b343a]'>{product.shortDescription}</h1>
        <div className='grid mt-3 md:mt-8 w-[80%] bg-zinc-100 py-10 md:grid-cols-2'>
          <img className='w-[80%] justify-self-center' alt='farm' src={product.image}></img>
          <div className='w-[80%] justify-self-center mt-8 md:justify-self-auto md:mt-0'>
            <h4>Farmers:</h4>
            <h3>{product.farmers}</h3>
            <h4>Location:</h4>
            <h3>{product.region}, {product.country}</h3>
            <h4>Produce:</h4>
            <h3>{product.produce}</h3>
            <br/>
            {product.email && <><a id='link' href={`mailto:${product.email}?`}>E-mail</a><br/></>}
            {product.website && <><a id='link' href={product.website}>Website</a><br/></>}
            {product.facebook && <><a id='link' href={product.facebook}>Facebook</a><br/></>}
            {product.instagram && <><a id='link' href={product.instagram}>Instagram</a><br/></>}
          </div>
        </div>
        <h3 className='w-[80%] text-center mt-10 mb-20'>{product.description}</h3>
        </div>
        <div className='flex place-content-center mb-28'>
          <Link to='/' className='btn-secondary'>Go back</Link>
          <Link to={`/edit/${product._id}`} className='btn-primary ml-8'>Edit</Link>
        </div>
      </>
      }
    </div>
  );
};

export default ProductDetails;