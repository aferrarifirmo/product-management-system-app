import { Link } from "react-router-dom";

const Product = ( {product, setTrackId} ) => {

  return (
    <Link to="/farm">
    <div className='w-[100%] aspect-square justify-self-center' onClick={() => setTrackId(product._id)}>
      <img alt='farmers' src={product.image}></img>
      <p className='text-left'>{product.name}</p>
      <p className='text-left'>{product.region}, {product.country}</p>
    </div>
    </Link>
  );
};

export default Product;
