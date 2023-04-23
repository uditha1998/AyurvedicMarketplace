import React from 'react';

export default function ProductCard() {
  const { product, onAdd } = props;

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mb-4">
        <img src={product.image} className="card-img-top" alt={product.name} />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <span className="price">${product.price.toFixed(2)}</span>
            <button onClick={() => onAdd(product)} className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { ProductCard};