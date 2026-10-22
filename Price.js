import React from 'react';
import product from './product';

function Price() {
  return (
    <p className="product-price">
      {new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
      }).format(product.price)}
    </p>
  );
}

export default Price;
