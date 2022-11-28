import { useNavigate } from "react-router-dom";
import { addNewProduct } from "../utils/apiServices";

const ProductForm = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    console.log(e)
    e.preventDefault();
    const newProduct = {
      name: e.target[0].value,
      shortDescription: e.target[1].value,
      farmers: e.target[2].value,
      region: e.target[3].value,
      country: e.target[4].value,
      produce: e.target[5].value,
      description: e.target[6].value,
      website: e.target[7].value,
      email: e.target[8].value,
      instagram: e.target[9].value,
      facebook: e.target[10].value
    };
    addNewProduct(newProduct);
    navigate('/');
  };

  return (
    <form className='flex-col' onSubmit={handleSubmit}>
          <p>Name</p>
          <input required></input>
          <p>One liner description</p>
          <input required></input>
          <p>Farmers</p>
          <input required></input>
          <p required>Region</p>
          <input required></input>
          <p>Country</p>
          <input required></input>
          <p required>Produce</p>
          <input></input>
          <p required>Description</p>
          <textarea></textarea>
          <p>Website</p>
          <input></input>
          <p>Email</p>
          <input></input>
          <p>Instagram</p>
          <input></input>
          <p>Facebook</p>
          <input></input>
          <div className='flex place-content-center mt-8'>
            <button className='btn-secondary' onClick={handleClick}>Cancel</button>
            <button className='btn-primary ml-8'>Submit</button>
          </div>
        </form>
  );
};

export default ProductForm;