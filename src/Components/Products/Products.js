import React, { useEffect, useState } from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Container, CardGroup} from 'react-bootstrap';
import ProductView from '../ProductView/ProductView';
const Products = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
    return (
        <div >
        <Container className='shop-container'>
        <CardGroup >
            {
                products.map(product => <Product
                    key={product.id}
                    data = {product}
                    />)
            }

        </CardGroup>
        <div className='right-side'>
            <ProductView />
        </div>
        </Container>
        </div>
    );
};

export default Products;