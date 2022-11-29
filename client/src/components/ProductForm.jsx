import { useNavigate, Link } from "react-router-dom";
import { addNewProduct } from "../utils/apiServices";
import { useState } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../utils/firebase';
import { v4 } from "uuid";
import ImageInput from "./ImageInput";

const ProductForm = () => {

  const navigate = useNavigate();
  const [imageUpload, setImageUpload] = useState(null);

  const uploadFile = async () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
    const url = await uploadFile();
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
      facebook: e.target[10].value,
      image: url
    };
    addNewProduct(newProduct);
    navigate('/');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form data-testid='form' aria-label='form' className='grid' onSubmit={handleSubmit}>
      <p>Name</p>
      <input type='text' aria-label='name' required></input>
      <p>One liner description</p>
      <input type='text' aria-label='short description' required></input>
      <p>Farmers</p>
      <input type='text' aria-label='farmers' required></input>
      <p>Region</p>
      <input type='text' aria-label='region' required></input>
      <p>Country</p>
      <input type='text' aria-label='country' required></input>
      <p>Produce</p>
      <input type='text' aria-label='produce' required></input>
      <p>Description</p>
      <textarea type='text' aria-label='description' required></textarea>
      <p>Website</p>
      <input type='text' aria-label='website'></input>
      <p>Email</p>
      <input type='text' aria-label='email'></input>
      <p>Instagram</p>
      <input type='text' aria-label='instagram'></input>
      <p>Facebook</p>
      <input type='text' aria-label='facebook'></input>
      <p>Image</p>
      <ImageInput setImageUpload={setImageUpload}></ImageInput>
      <div className='flex place-content-center mt-8'>
        <Link to='/' data-testid='cancel-btn' aria-label='cancel button' className='btn-secondary'>Cancel</Link>
        <button data-testid='submit-btn' aria-label='submit button' className='btn-primary ml-8'>Submit</button>
      </div>
    </form>
  );
};

export default ProductForm;