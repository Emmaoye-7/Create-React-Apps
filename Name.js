import React from 'react';
import { Card } from 'react-bootstrap';
import product from './product';

function Name() {
  return <Card.Title className="product-name">{product.name}</Card.Title>;
}

export default Name;
