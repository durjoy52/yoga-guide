import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Service = ({service}) => {
    const {img,name,description,price} =service
    const navigate = useNavigate()
    return (
        <div className='col-md-4'>
             <Card style={{ width: '22rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <p>Price: ${price}</p>
    <Card.Text>
      {description}
    </Card.Text>
  </Card.Body>
    <Card.Footer>
    <Button onClick={_=>navigate('/checkout')} variant="success w-100 text-white fw-bold">Checkout</Button>
    </Card.Footer>
</Card>
        </div>
    );
};

export default Service;