import React, { useEffect, useState } from 'react';
import Product from './Product';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, CardGroup} from 'react-bootstrap';
import ProductView from '../ProductView/ProductView';
const Products = () => {
    const [products, setProducts] = useState([]);
   const [randomNumber, setRandomNumber] =useState(0);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        fetch("data.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[]);
   const choseBtnHandle = (number) => {
        let rand = Math.floar(Math.random()*12) +1;
        setRandomNumber(rand);
        return randomNumber;
     }
    const cartBtnHandle = (product) => {
        const newCart = [...cart, product];
        if (!(newCart.length > 4)) {
            setCart(newCart);
        }else{
            alert("Sorry! 😥😥 You can't select over 4 Book. ");
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
                    random ={choseBtnHandle} 
                    />
                </div>
        </div>
    );
};

export default Products;