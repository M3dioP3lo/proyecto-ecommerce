import React from "react";
import styles from "./ProductCard.module.css";

interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div className={styles.card}>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p className={styles.description}>{product.description}</p>
      <p className={styles.price}>${product.price.toLocaleString()}</p>
      <p></p>
      <button className="mt-3 bg-blue-500 text-white px-4 py-1 rounded">
        Comprar
      </button>
    </div>
  );
};

export default ProductCard;
