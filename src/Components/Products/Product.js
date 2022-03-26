import React from 'react';
import "./Product.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsFillCartFill } from 'react-icons/bs';
import { Card, ButtonGroup, Button} from 'react-bootstrap';

const Product = ({cartBtnHandle, data}) => {
    const {name, img, price} = data;
    return (
    <div>
        <Card>
            <Card.Img variant="top" src={img} />
            <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text>
                Price: $ {price}
            </Card.Text>
            </Card.Body>
            <Card.Footer>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary" onClick={() => cartBtnHandle(data)}>Add to Cart <Button variant="secondary"><BsFillCartFill />
                </Button>
                </Button>
               
            </ButtonGroup> 
        </Card.Footer>
        </Card>
    </div>
    );
};

export default Product;