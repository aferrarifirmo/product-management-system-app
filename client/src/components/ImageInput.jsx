import { useState, useEffect } from "react";

const ImageInput = ( { setImageUpload, product }) => {

  const [selectedFile, setSelectedFile] = useState();
  const [preview, setPreview] = useState();

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

  return (
    <>
      <input className='h-full' type='file' accept='.jpg, .jpeg, .png, .gif' aria-label='image' required onChange={onSelectFile}></input>
      {selectedFile ? <img className='place-self-center my-8 max-h-48' alt='preview' src={preview} /> :
      product ?
      <img className='place-self-center my-8 max-h-48' alt='preview' src={product.image} /> : <></> }
    </>
  );
};

export default ImageInput;