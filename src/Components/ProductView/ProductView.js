import React from 'react';
import "./ProductView.css";
import {Stack, Button} from 'react-bootstrap';

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
           <Stack gap={3} className="col-md-5 mx-auto">
                <Button variant="secondary">Choose 1 Book</Button>
                <Button variant="outline-secondary">Choose Again</Button>
            </Stack>
            
        </div>
    );
        

};

export default ProductView;