import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState, useCallback } from "react";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import storage from '../utils/firebase';
import { v4 } from "uuid";
import { getProductById, deleteProduct, updateProduct } from "../utils/apiServices";

const EditProductForm = () => {

  const { trackId } = useParams();
  const [product, setProduct] = useState();
  const navigate = useNavigate();

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
    <>
    { product && 
    <form className='grid' onSubmit={handleSubmit}>
      <p>Name</p>
      <input type='text' defaultValue={product.name} required></input>
      <p>One liner description</p>
      <input defaultValue={product.shortDescription} required></input>
      <p>Farmers</p>
      <input defaultValue={product.farmers} required></input>
      <p required>Region</p>
      <input defaultValue={product.region} required></input>
      <p>Country</p>
      <input defaultValue={product.country} required></input>
      <p>Produce</p>
      <input defaultValue={product.produce} required></input>
      <p>Description</p>
      <textarea defaultValue={product.description} required></textarea>
      <p>Website</p>
      <input defaultValue={product.website}></input>
      <p>Email</p>
      <input defaultValue={product.email}></input>
      <p>Instagram</p>
      <input defaultValue={product.instagram}></input>
      <p>Facebook</p>
      <input defaultValue={product.facebook}></input>
      <p>Image</p>
      <input className='h-full' type='file' accept='.jpg, .jpeg, .png, .gif' onChange={onSelectFile}></input>
      {selectedFile ? <img className='place-self-center my-8 max-h-48' alt='preview' src={preview} /> :
      <img className='place-self-center my-8 max-h-48' alt='preview' src={product.image} /> }
      <div className='flex place-content-around mt-8 md:place-content-center'>
        <Link to={`/farm/${product._id}`} className='btn-secondary'>Cancel</Link>
        <Link to={'/'} className='btn-primary bg-[#f16b56] md:ml-8' onClick={deleteBtn}>Delete</Link>
        <button className='btn-primary md:ml-8'>Submit</button>
      </div>
    </form>
    }
    </>
  );
};

export default EditProductForm;