import React from 'react';
import { Card } from 'react-bootstrap';
import product from './product';

function Image() {
  return (
    <Card.Img
      className="product-image"
      src={product.image}
      alt={product.name}
    />
  );
}

export default Image;
