import React, { useEffect, useState } from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, CardGroup} from 'react-bootstrap';
import ProductView from '../ProductView/ProductView';
import Btn from '../Button/Btn';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);

    const cartBtnHandle = (product) => {
        const newCart = [...cart, product];
        if (!(newCart.length > 4)) {
            setCart(newCart);
        }else{
            alert("Sorry! 😥😥 You can't select over 4 Book. ");
        }
    }
    const randomNumber = () => {
        const randomItem = cart[Math.floor(Math.random() * cart.length)];
            if (randomItem) {
                setCart([randomItem])
            }
        }
    return (
        <div  className='shop-container'>
            <Container>
            <CardGroup >
                {
                products.map(product => <Product
                    key={product.id}
                    data = {product}
                    cartBtnHandle = {cartBtnHandle}
                />)
                }

            </CardGroup>
            </Container>
                <div className='right-side'>
                    <ProductView
                    product ={cart}
                    key = {cart.id}
                    randomNumber = {randomNumber}

                    />
                </div>
        </div>
    );
};

export default Products;