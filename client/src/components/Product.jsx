import { Link } from "react-router-dom";

const Product = ( {product} ) => {

  return (
    <Link to={`/farm/${product._id}`}>
    <div className='w-full aspect-square justify-self-center'>
      <img className='max-h-[67%] w-full object-cover' alt='farmers' src={product.image}></img>
      <p className='text-left'>{product.name}</p>
      <p className='text-left'>{product.region}, {product.country}</p>
    </div>
    </Link>
  );
};

export default Product;
