import { StarIcon } from "@heroicons/react/24/outline";

const ProductRatings = ({ product }) => {
  const starNumber = product.avgRating;
  const ratingNumber = product.ratings;
  return (
    <div className="flex">
      {Array.from({ length: starNumber }, (_, i) => (
        <StarIcon
          key={i}
          className="h-[20px] stroke-yellow-400 fill-yellow-400"
        />
      ))}
      {Array.from({ length: 5 - starNumber }, (_, i) => (
        <StarIcon key={i} className="h-[20px] stroke-yellow-400" />
      ))}
      <span className="text-blue-500 ml-3">
        {ratingNumber} <span>ratings</span>
      </span>
    </div>
  );
};

export default ProductRatings;
