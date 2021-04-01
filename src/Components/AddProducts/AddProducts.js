import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";



import ManageProduct from './ManageProduct/ManageProduct';

const AddProducts = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [imageURL, setImageURL] = useState(null);

  


  const handleImageUpload = product =>{
      console.log(product.target.files[0]);
      const imageData = new FormData();
      imageData.set('key','d548157c08fa2d99d3a73e1a0c5ed06c');
      imageData.append('image',product.target.files[0])

      axios.post('https://api.imgbb.com/1/upload',imageData)
      .then(function (response) {
        setImageURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  const onSubmit = data => {

    const productData ={
        name:data.name,
        price: data.price,
        quantity: data.quantity,
        wight: data.wight,
        imageURL:imageURL
    }
    const url =`http://localhost:5000/addProduct`
   
    fetch(url,{
        method: 'POST',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(productData)
    })
    .then(res => console.log('server side response'))
  
};
    return (
        <div >
             
             
          
           <h2>Add product</h2>
            <br/>
            <div className="row">
            <form className="col-sm-12 " onSubmit={handleSubmit(onSubmit)}>
            <h5>Product Name</h5>
      <input name="name" ref={register} />
     <br/> 
     <h5>Add price</h5>
      <input name="price" ref={register({ required: true })} />
      <br/> 
      <h5>Add wight</h5>
      
      <input name="wight" ref={register({ required: true })} />
      <br/> 
      <input name="image_URL " type = "file" onChange ={ handleImageUpload} />
      <br/> 
    
      <input  className="btn btn-success btn-lg" type="submit" />
    </form>
           </div>
   
        </div>
    );
};

export default AddProducts;