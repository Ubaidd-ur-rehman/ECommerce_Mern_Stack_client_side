import {useNavigate} from 'react-router-dom'
import React from 'react';
import "./Product.scss";
import prod from '../../../assets/products/earbuds-prod-1.webp';

const Product = ({ id, data }) => {
    // Check if data.img.data is defined and has at least one element
    const imgSrc = data.img.data && data.img.data.length > 0
        ? process.env.REACT_APP_DEV_URL + data.img.data[0].attributes.url
        : prod; // Use a default image source or handle it as per your requirements
        const navigate=useNavigate();
    return (
        <div className="product-card" onClick={()=> navigate('/product/'+id)}>
            <div className="thumbnail">
                <img src={imgSrc} alt="" />
            </div>
            <div className="prod-details">
                <span className="name">{data.title}</span>
                <span className="price">&#36; {data.price}</span>
            </div>
        </div>
    );
};

export default Product;
