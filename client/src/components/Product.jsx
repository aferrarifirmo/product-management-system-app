import { Link } from "react-router-dom";

const Product = ( {product} ) => {
// mb-6
  return (
    <Link to={`/farm/${product._id}`}>
    <div className='w-full aspect-[8/7] justify-self-center'> 
      <img className='max-h-[67%] w-full object-cover' alt='farmers' src={product.image}></img>
      <p className='text-left mt-4 text-xl md:text-lg font-bold text-[text-[#2b343a]]'>{product.name}</p>
      <p className='text-left font-medium text-teal-800'>{product.region}, {product.country}</p>
    </div>
    </Link>
  );
};

export default Product;
