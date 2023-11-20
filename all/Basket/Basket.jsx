import React, { useState } from "react";
import { groupBy } from "../../utils";
import BasketItem from "../BasketItem/BasketItem";
import "./Basket.scss";
import ProductModal from "../ProductModal/ProductModal";

const Basket = (props) => {
  const { orderedProducts, onProductRemove, onProductSelect } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const totalCost = orderedProducts.reduce(
    (acc, orderedProduct) => acc + orderedProduct.price,
    0
  );

  const groupedOrderedProducts = Object.entries(
    groupBy(orderedProducts, (product) => product.name)
  );

  const handleRemoveProduct = (orderedProduct) => {
    onProductRemove(orderedProduct);
  };

  const handleProductModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="basket">
      <header>
        <h5>
          <span>Basket</span>
          <span>({orderedProducts.length} products)</span>
        </h5>
        <button>X</button>
      </header>
      <div>
        <ul>
          {groupedOrderedProducts.map(([name, orderedProducts], index) => (
            <BasketItem
              key={`${name}-${index}`}
              orderedProduct={orderedProducts[0]}
              orderCount={orderedProducts.length}
              onProductRemove={handleRemoveProduct}
            />
          ))}
        </ul>
      </div>
      <footer>
        {orderedProducts.length > 0 && (
          <button onClick={handleProductModal}>
            Order and Pay ({totalCost.toFixed(2)})
          </button>
        )}
      </footer>
      <ProductModal
        trigger={isModalOpen}
        orderedProducts={orderedProducts}
        onClose={handleCloseModal}
      />
    </div>
  );
};

export default Basket;
