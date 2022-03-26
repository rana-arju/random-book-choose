import React from 'react';
import { Stack, Button} from 'react-bootstrap';

const Btn = ({randomNumber}) => {
    console.log(randomNumber);
    return (
        <div>
            <Stack gap={3} className="col-md-5 mx-auto">
                <Button variant="secondary" onClick={randomNumber}>Choose 1 Book</Button>
                <Button variant="outline-secondary">Choose Again</Button>
            </Stack>
        </div>
    );
};

export default Btn;