import React from 'react';


import { Link, useHistory } from 'react-router-dom';

const Product = ({product}) => {
// const[productItem ,setProductItem] = useState(null)



    const history = useHistory();
    const handleProduct =(_id)=>{
        const url = `/product/${_id}`
        history.push(url)
        
    }
    return (
        <div className = "col-md-3" >
            {/* <img src={product.imageURL} alt=""/> */}
           <div  className ="border m-2" >
           <img style={{height : '200px'}} src={product.imageURL} alt=""/>
            <h3>{product.name}</h3>
            <h3><b>$ {product.price}</b></h3>
            {/* <Link to ={`/product/${product._id}`}> Buy Now</Link> */}
            <button className="btn btn-dark btn-lg" onClick ={()=>handleProduct(product._id)}>Buy Now</button>
           </div>
           
           
        </div>
    );
};

export default Product;