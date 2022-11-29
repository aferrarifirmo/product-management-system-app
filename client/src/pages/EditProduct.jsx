import EditProductForm from "../components/EditProductForm";

const EditProduct = () => {

  return (
    <div className='grid'>
      <h1>Edit farm</h1>
      <div className='h-[100%] md:w-[60%] justify-self-center mb-28'>
        <EditProductForm />
      </div>
    </div>
  )
};

export default EditProduct;