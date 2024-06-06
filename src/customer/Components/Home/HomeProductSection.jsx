import React from "react";
import ProductCard from "../Product/ProductCard/ProductCard";

const HomeProductSection = ({ products, section }) => {
  return (
    <div>
      <h2>{section}</h2>
      <div className="flex flex-wrap justify-center bg-white py-5 rounded-md ">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default HomeProductSection;
