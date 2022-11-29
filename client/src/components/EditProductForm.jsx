import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useCallback, useRef } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../utils/firebase';
import { v4 } from "uuid";
import { getProductById, deleteProduct, updateProduct } from "../utils/apiServices";
import ImageInput from "./ImageInput";

const EditProductForm = () => {

  const { trackId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();
  const imageUpload = useRef(null);

  const uploadFile = async () => {
    if (imageUpload === null) return;
    const imageRef = ref(storage, `images/${imageUpload.name + v4()}`);
    const snapshot = await uploadBytes(imageRef, imageUpload);
    const url = await getDownloadURL(snapshot.ref);
    return url;
  };

  const deleteBtn = async () => {
    await deleteProduct(trackId);
  };
  
  const fetchProduct = useCallback( () => {
    getProductById(trackId).then(res => setProduct(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  useEffect(() => {
    fetchProduct();
  }, [fetchProduct]);

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      const url = await uploadFile();
      const updatedProduct = {
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
      updateProduct(product._id, updatedProduct);
      navigate(`/farm/${product._id}`);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
    { product && 
    <form className='grid' onSubmit={handleSubmit}>
      <p>Name</p>
      <input type='text' aria-label='name' defaultValue={product.name} required></input>
      <p>One liner description</p>
      <input type='text' aria-label='short description' defaultValue={product.shortDescription} required></input>
      <p>Farmers</p>
      <input type='text' aria-label='farmers' defaultValue={product.farmers} required></input>
      <p required>Region</p>
      <input type='text' aria-label='region' defaultValue={product.region} required></input>
      <p>Country</p>
      <input type='text' aria-label='country' defaultValue={product.country} required></input>
      <p>Produce</p>
      <input type='text' aria-label='produce' defaultValue={product.produce} required></input>
      <p>Description</p>
      <textarea type='text' aria-label='description' defaultValue={product.description} required></textarea>
      <p>Website</p>
      <input type='text' aria-label='website' defaultValue={product.website}></input>
      <p>Email</p>
      <input type='text' aria-label='email' defaultValue={product.email}></input>
      <p>Instagram</p>
      <input type='text' aria-label='instagram' defaultValue={product.instagram}></input>
      <p>Facebook</p>
      <input type='text' aria-label='facebook' defaultValue={product.facebook}></input>
      <p>Image</p>
      <ImageInput product={product}></ImageInput>
      <div className='flex place-content-around mt-8 md:place-content-center'>
        <Link to={`/farm/${product._id}`} className='btn-secondary' aria-label='cancel button'>Cancel</Link>
        <Link to={'/'} className='btn-primary bg-[#f16b56] md:ml-8' aria-label='delete button' onClick={deleteBtn}>Delete</Link>
        <button className='btn-primary md:ml-8' aria-label='submit button'>Submit</button>
      </div>
    </form>
    }
    </>
  );
};

export default EditProductForm;