import { useEffect, useCallback, useState } from "react";
import Product from "../components/Product";
import { getAllProducts } from "../utils/apiServices";

const HomePage = ({setTrackId}) => {

  const [products, setProducts] = useState([]);

  const fetchProducts = useCallback( () => {
    getAllProducts().then(res => setProducts(res));
  }, [])
  
  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);
  
  // console.log(products);

  return (
    <>
      <h1>The farms</h1>
      <div className='md:h-full w-[100%] grid'>
        <main className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 min-h-full w-[80%] justify-self-center'>
        {products && 
        products.map((product, i) =>
          <Product
          key={i}
          product={product}
          setTrackId={setTrackId}
          ></Product>
        )}
        </main>
      </div>
    </>
  );
};

export default HomePage;