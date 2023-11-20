import React, { useState } from "react";
import "./ProductModal.scss";
import { FaArrowLeft, FaHeart, FaRegHeart, FaArrowRight } from "react-icons/fa";

const ProductModal = (props) => {
  const { orderedProducts, onClose, trigger } = props;
  const product =
    orderedProducts && orderedProducts.length > 0 ? orderedProducts[0] : null;

  if (!product || !trigger) {
    return null;
  }

  const { name, price, description, imageUrl } = product;

  const [count, setCount] = useState(1);
  const [isHeartChange, setHeartChange] = useState(false);

  const changingHeart = () => {
    setHeartChange((prevHeartChange) => !prevHeartChange);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => (prevCount === 1 ? 1 : prevCount - 1));
  };

  const sumPrice = count * price;

  return (
    <section className="ProductModal">
      <main>
        <footer className="ProductIcons">
          <FaArrowLeft onClick={onClose} />
          {isHeartChange ? (
            <FaHeart onClick={changingHeart} />
          ) : (
            <FaRegHeart onClick={changingHeart} />
          )}
        </footer>
        <img src={imageUrl} alt={name} />
        <div className="ProductDescription">
          <strong>{name}</strong>
          <p>{description}</p>
          <strong>{price}</strong>
        </div>

        <nav>
          <h3>DODAJ TO CO LUBISZ </h3>
          <div>
            <FaArrowLeft />
            <FaArrowRight />
          </div>
          <div>{/* slider */}</div>
        </nav>
        <div>
          <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
          </div>
          <button onClick={onClose}>DODAJ DO KOSZYKA {sumPrice}</button>
        </div>
      </main>
    </section>
  );
};

export default ProductModal;
