import ProductForm from "../components/ProductForm";

const NewProduct = () => {

  return (
    <div className='grid'>
      <h1>Add a new farm</h1>
      <div className='h-[100%] md:w-[60%] justify-self-center mb-28'>
        <ProductForm />
      </div>
    </div>
  )
};

export default NewProduct;