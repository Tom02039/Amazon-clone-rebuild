import React from "react";

const ProductBadge = ({ badge }) => {
  if (badge === "seller") {
    return (
      <span className="bg-orange-400 text-white font-semibold text-xs xl:text-sm p-1">
        #1 Best Seller
      </span>
    );
  } else if (badge === "choice") {
    return (
      <span className="bg-amazonclone text-white font-semibold text-xs xl:text-sm p-1">
        Amazon's <span className="text-orange-400 ">Choice</span>
      </span>
    );
  } else if (badge === "limited") {
    return (
      <span className="bg-red-500 text-white font-semibold text-xs xl:text-sm p-1">
        Limited Time Deal
      </span>
    );
  }
};

export default ProductBadge;
