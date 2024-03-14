import React from 'react';

const Product = ({ product }) => {
  const { id, name, description, price, imageUrl, inStock } = product;

  return (
    <div className={`product ${inStock ? '' : 'out-of-stock'}`}>
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      {/* <p className='productdetail'>{description}</p> */}
      <p id='productdetail'>&#x20b9; {price}</p>
      {inStock ? (
        <button>Add to Cart</button>
      ) : (
        <p className="out-of-stock-message">Out of Stock</p>
      )}
    </div>
  );
};

export default Product;