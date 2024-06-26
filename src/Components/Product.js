import React from 'react';

function Product(props) {
    return (
        <div className="product">
            <h2>{props.name}</h2>
            <p>{props.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default Product;
