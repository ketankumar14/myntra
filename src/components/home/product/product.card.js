import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
export default function ProductCard({item}) {
  return (
    <Card style={{ width: '18rem'}}>
      <Card.Img variant="top" src={item.image} />
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Button variant="primary">ADD TO CART</Button>
        <Button variant="danger">BUY NOW</Button>
      </Card.Body>
    </Card>
  );
}

