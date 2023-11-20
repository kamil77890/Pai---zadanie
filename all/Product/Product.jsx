import React from "react";
import "./Product.scss";

const Product = (props) => {
  const { product, orderedProducts, onProductSelect } = props;
  const { id, name, price, description, imageUrl } = product;
  const isOrdered = orderedProducts.some(
    (orderedProduct) => orderedProduct.id === id
  );
  const orderCount = orderedProducts.filter(
    (orderedProduct) => orderedProduct.id === id
  ).length;

  const handleButtonClick = () => {
    onProductSelect(product);
  };

  return (
    <article className="product" data-ordered={isOrdered}>
      <div>
        <img src={imageUrl} alt={name} />
      </div>
      <div>
        <header>
          <h4>{name}</h4>
          <p>{description}</p>
        </header>
        <footer>
          <strong>{price}</strong>
          <button onClick={handleButtonClick}>
            {isOrdered ? orderCount : "+"}
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Product;
