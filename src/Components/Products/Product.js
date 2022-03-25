import React from 'react';
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill } from 'react-icons/bs';

import { Card, ButtonGroup, Button} from 'react-bootstrap';

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
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">Add to Cart                 <Button variant="secondary"><BsFillCartFill />
                </Button>
                </Button>
               
            </ButtonGroup> 
        </Card.Footer>
        </Card>
    </div>
    );
};

export default Product;