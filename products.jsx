import { useState } from "react";
import "./ProductModal.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart as regularHeart,
  faHeartSolid as solidHeart,
} from "@fortawesome/free-regular-svg-icons";

const ProductModal = (props) => {
  const { orderedProducts } = props;
  const { name, price, description, imageUrl } = orderedProducts;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [count, setCount] = useState(0);
  const [isHeartChange, setHeartChange] = useState(false);

  const changingHeart = () => {
    setHeartChange(!isHeartChange);
  };

  if (isModalOpen === false) {
    return;
  }

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
    if (count === 0) {
      count = 1;
    }
  };
  const sumPrice = count * price;
  return (
    <>
      <section className="ProductModal">
        <main>
          <footer className="ProductIcons">
            <FontAwesomeIcon
              icon="fa-solid fa-arrow-left"
              onClick={() => setIsModalOpen(false)}
            />
            <FontAwesomeIcon
              icon={isHeartChange ? solidHeart : regularHeart}
              onClick={changingHeart}
            />
          </footer>
          <img src={imageUrl} alt={name} />
          <div className="ProductDescription">
            <strong>{name}</strong>
            <p>{description}</p>
            <strong>{price}</strong>
          </div>
        </main>
        <nav>
          <h3>DODAJ TO CO LUBISZ </h3>
          <div>
            <FontAwesomeIcon icon="fa-solid fa-arrow-left" />
            <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
          </div>
          <div>{/* slider */}</div>
        </nav>
        <div>
          <div>
            <button onClick={decrement}>-</button>
            {count}
            <button onClick={increment}>+</button>
          </div>
          <button>DODAJ DO KOSZYKA {sumPrice}</button>
        </div>
      </section>
    </>
  );
};

export default ProductModal;
