import { useNavigate, Link } from "react-router-dom";
import { addNewProduct } from "../utils/apiServices";
import { useEffect, useState } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../utils/firebase';
import { v4 } from "uuid";

const ProductForm = () => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
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

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [imageUpload, setImageUpload] = useState(null);

  useEffect(() => {
      if (!selectedFile) {
        setPreview(undefined)
        return;
      }
      const objectUrl = URL.createObjectURL(selectedFile)
      setPreview(objectUrl)
      return () => URL.revokeObjectURL(objectUrl)
  }, [selectedFile])

  const onSelectFile = (e) => {
    if (!e.target.files) {
      setSelectedFile(undefined);
      return;
    }
    setSelectedFile(e.target.files[0])
    setImageUpload(e.currentTarget.files[0]);
  };

  const uploadFile = async () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  return (
    <form data-testid='form' className='grid' onSubmit={handleSubmit}>
      <p>Name</p>
      <input required></input>
      <p>One liner description</p>
      <input required></input>
      <p>Farmers</p>
      <input required></input>
      <p>Region</p>
      <input required></input>
      <p>Country</p>
      <input required></input>
      <p>Produce</p>
      <input required></input>
      <p>Description</p>
      <textarea required></textarea>
      <p>Website</p>
      <input></input>
      <p>Email</p>
      <input></input>
      <p>Instagram</p>
      <input></input>
      <p>Facebook</p>
      <input></input>
      <p>Image</p>
      <input className='h-full' type='file' accept='.jpg, .jpeg, .png, .gif' required onChange={onSelectFile}></input>
      {selectedFile && <img className='place-self-center my-8 max-h-48' alt='preview' src={preview} /> }
      <div className='flex place-content-center mt-8'>
        <Link to='/' data-testid='cancel-btn' className='btn-secondary'>Cancel</Link>
        <button data-testid='submit-btn' className='btn-primary ml-8'>Submit</button>
      </div>
    </form>
  );
};

export default ProductForm;