import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { ProductDetails } from "../";
import {
  removeFromCart,
  incrementInCart,
  decrementInCart,
} from "../../redux/cartSlice.js";

const CheckoutPage = () => {
  const products = useSelector((state) => state.cart.products);
  const itemsNumber = useSelector((state) => state.cart.productsNumber);
  const subtotal = useSelector((state) =>
    state.cart.products.reduce(
      (subtotal, product) => subtotal + product.quantity * product.price,
      0
    )
  );
  const dispatch = useDispatch();

  return (
    <div className="h-screen bg-amazonclone-background">
      <div className="min-w-[1000px] max-w-[1500px] m-auto pt-8">
        <div className="grid grid-cols-8 gap-10">
          <div className="col-span-6 bg-white rounded">
            <div className="text-2xl xl:text-3xl font-semibold m-4">
              Shopping Cart
            </div>
            {products.map((product) => (
              <div key={product.id}>
                <div className="grid grid-cols-12 divide-y divide-gray-400 mr-4">
                  <div className="col-span-10 grid grid-cols-8 divide-y divide-gray-400">
                    <div className="col-span-2">
                      <Link to={`/product/${product.id}`}>
                        <img
                          className="p-4 m-auto"
                          alt="product"
                          src={product.image_small}
                        />
                      </Link>
                    </div>
                    <div className="col-span-6">
                      <div className="mt-2 font-semibold">
                        <Link to={`/product/${product.id}`}>
                          <ProductDetails product={product} hasRating={false} />
                        </Link>
                      </div>
                      <div className="mt-2">
                        <button
                          onClick={() => dispatch(removeFromCart(product.id))}
                          className="text-sm xl:text-base text-blue-500 font-semibold"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="w-20 grid grid-cols-3 text-center mt-4">
                        <div
                          onClick={() => dispatch(decrementInCart(product.id))}
                          className="bg-gray-200 rounded-l cursor-pointer hover:bg-gray-300"
                        >
                          -
                        </div>
                        <div className="bg-gray-50">{product.quantity}</div>
                        <div
                          onClick={() => dispatch(incrementInCart(product.id))}
                          className="bg-gray-200 rounded-r cursor-pointer hover:bg-gray-300"
                        >
                          +
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-span-2">
                    <div className="text-xl xl:text-2xl font-semibold mt-2">
                      ${product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
            {subtotal > 0 && (
              <div className="text-xl xl:text-2xl text-right mb-4 mr-10">
                Subtotal ({itemsNumber} item):{" "}
                <span className="font-semibold">${subtotal}</span>
              </div>
            )}
          </div>
          <div className="col-span-2 h-[250px] rounded bg-white p-7">
            <div className="text-xs xl:text-sm text-green-600 mb-2">
              Your order qualifies for{" "}
              <span className="font-bold">FREE DELIVERY</span>
              <div>Delivery Details</div>
            </div>
            <div className="text-base xl:text-lg mb-4">
              Subtotal ({itemsNumber} item):{" "}
              <span className="font-semibold">${subtotal}</span>
            </div>
            <button className="btn">Proceed to Checkout</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
