import React from 'react';
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card } from 'react-bootstrap';

const Product = (props) => {
    const {name, img, price} = props.data;
    return (
    <div>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                {price}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>
    </div>
    );
};

export default Product;