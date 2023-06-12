import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ProductDetails } from "../";
import { callAPI } from "../../utils/CallApi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/cartSlice";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState("1");
  const dispatch = useDispatch();

  const getProduct = () => {
    callAPI("data/products.json").then((productResults) => {
      setProduct(productResults[id]);
    });
  };

  const addQuantityToProduct = () => {
    setProduct((product.quantity = quantity));
    return product;
  };

  useEffect(() => {
    getProduct();
  }, []);

  console.log(!product?.title);
  if (!product?.title) return <h1>Loading Product...</h1>;

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto">
        <div className="grid grid-cols-10 gap-2">
          <div className="col-span-3 bg-white p-8 m-auto">
            <img alt="product" src={`${product.image}`} />
          </div>
          <div className="col-span-5 bg-white divide-y divide-gray-300 p-4">
            <div className="mb-5">
              <ProductDetails product={product} hasRating={true} />
            </div>
            <div className="text-base xl:text-lg mt-3">
              {product.description}
            </div>
          </div>
          <div className="col-span-2 bg-white p-4">
            <div className="text-right text-xl xl:text-2xl text-red-700 font-semibold">
              ${product.price}
            </div>
            <div className="text-right text-base xl:text-lg text-gray-500">
              List Price: $
              <span className="line-through">{product.oldPrice}</span>
            </div>
            <div className="text-blue-500 font-semibold mt-3">FREE Returns</div>
            <div className="text-blue-500 font-semibold mt-1">
              FREE Delivery
            </div>
            <div className="text-green-500 font-semibold mt-1">In Stock</div>
            <div className="text-base xl:text-lg mt-1">
              Quantity:
              <select
                onChange={(e) => setQuantity(e.target.value)}
                className="border border-gray-200 p-2 ml-2"
              >
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>
            <Link to={"/checkout"}>
              <button
                onClick={() => dispatch(addToCart(addQuantityToProduct()))}
                className="btn"
              >
                Add to Cart
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
