import React from 'react';
import Details from '../Details/Details';
import './SingleProduct.css';

const SingleProduct = (props) => {
    const {setCartCount} = props;
    return (
        <div className='col-md-4' data-aos="fade-up"
        data-aos-anchor-placement="center-bottom">
           <div className="card p-4 mb-4">
                <div className="card-body">
                    <img src={props.product.image} alt="" />
                    <h3>{props.product.title.slice(0, 11)}</h3>
                    {/* <button className="btn btn-primary py-2 px-3 mx-1 mt-4">Details</button> */}
                    <div className="d-flex justify-content-around">
                        <Details product={props.product}></Details>
                        <button onClick={setCartCount} className="btn btn-success">Add to Cart</button>
                        <button className="btn btn-danger">Remove</button>
                    </div>
                    
                </div>
           </div>
        </div>
    );
};

export default SingleProduct;