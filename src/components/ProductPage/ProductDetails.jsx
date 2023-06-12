import React from "react";
import { ProductBadge, ProductRatings } from "../";

const ProductDetails = ({ product, hasRating }) => {
  return (
    <div className="mb-1">
      <div className="text-xl xl:text-2xl font-semibold mb-1">
        {product.title}
      </div>
      <div className="text-sm xl:text-base mb-1">
        by <span className="text-blue-500 font-semibold">{product.brand}</span>
      </div>
      {hasRating && (
        <div className="text-sm xl:text-base font-semibold mb-1">
          <ProductRatings product={product} />
        </div>
      )}
      <div className="text-xs xl:text-sm font-bold mb-1">
        {product.attribute}
      </div>
      <div className="">
        <ProductBadge badge={product.badge} />
      </div>
    </div>
  );
};

export default ProductDetails;
