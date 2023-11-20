import React from "react";
import "./BasketItem.scss";

const BasketItem = (props) => {
  const { orderedProduct, onProductRemove, orderCount } = props;
  const { name, price } = orderedProduct;

  function handleButtonClick() {
    onProductRemove(orderedProduct);
  }

  return (
    <li className="basket-item">
      <div className="info">
        <span>{orderCount}x</span>
        <span>{name}</span>
        <span>{price}</span>
      </div>
      <div className="actions">
        <button type="button" onClick={handleButtonClick}>
          Remove
        </button>
      </div>
    </li>
  );
};

export default BasketItem;
