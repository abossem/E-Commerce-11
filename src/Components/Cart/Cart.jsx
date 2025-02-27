import { Check } from "lucide-react";
import CartItemsList from "./CartItemsList";
import { useCartContext } from "../../context/CartContext";
import emptyCart from "../../assets/empty-cart.png";
import { useUserContext } from "../../context/User.context";
import { Navigate } from "react-router-dom";
export default function Cart() {
  const { cartItems } = useCartContext();
  const { token } = useUserContext();
  if (token) {
    return (
      <div className="py-3 font-inter flex justify-center items-center">
        <div className="flex items-start flex-wrap gap-4 container px-4 md:px-10">
          <div className="flex-1 bg-gray-100/20 rounded-lg p-5 shadow">
            <h2 className="font-semibold text-xl  mb-3">Shopping Cart</h2>
            <div className="flex flex-col gap-4">
              {cartItems?.length ? (
                <CartItemsList />
              ) : (
                <>
                  <img
                    src={emptyCart}
                    className="max-w-2xs mx-auto"
                    alt="empty cart"
                  />
                  <p className="text-lg font-semibold text-center">
                    Cart is Empty!
                  </p>
                </>
              )}
            </div>
          </div>
          <div
            className={`bg-gray-100/20 rounded-lg p-6 shadow flex flex-col gap-4 ${
              cartItems?.length ? "" : "hidden"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="size-6 p-0.5 flex items-center justify-center rounded-full text-primary-white bg-green-800">
                <Check />
              </div>
              <p className="text-green-800">
                Your order qualifies for FREE Shipping
              </p>
            </div>
            <div>
              <p>
                Subtotal ({cartItems?.length} items):
                <span className="font-bold">
                  {" "}
                  EGP{" "}
                  {cartItems?.reduce(
                    (acc, item) =>
                      Number(
                        (acc + item.product.price * item.quantity).toFixed(2)
                      ),
                    0
                  )}
                </span>
              </p>
            </div>
            <button className="rounded-full py-1.5 bg-yellow">
              Proceed to Buy
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    return <Navigate to="/login" />;
  }
}
