import { useState, useEffect } from "react";

const ImageInput = ( { setImageUpload, product }) => {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();
  const [toggle, setToggle] = useState(true);

  useEffect(() => {
    if (product) setToggle(false);
  }, [])

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

  console.log(toggle);

  return (
    <>
      <input className='h-full' type='file' accept='.jpg, .jpeg, .png, .gif' required={toggle} aria-label='image' onChange={onSelectFile}></input>
      {selectedFile ? <img className='place-self-center my-8 max-h-48' alt='preview' src={preview} /> :
      product ?
      <img className='place-self-center my-8 max-h-48' alt='preview' src={product.image} /> : <></> }
    </>
  );
};

export default ImageInput;