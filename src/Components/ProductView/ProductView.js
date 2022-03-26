import React from 'react';
import Btn from '../Button/Btn';
import "./ProductView.css";

const ProductView = ({product}) => {

    return (
        <div className='right-card'>
            <h2> You Are Selected </h2>
            <hr />
           { 
            product.map(item =>
                <div className='card-info'>
                    <img src={item.img} alt="" />
                    <h4>{item.name}</h4>  
                </div>
            ) 
            }
            <h2> This Book For You </h2>
            <hr />
           
            <Btn />
            
        </div>
    );
        

};

export default ProductView;