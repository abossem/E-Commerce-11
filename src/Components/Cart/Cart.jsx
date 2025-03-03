import { Check } from "lucide-react";
import CartItemsList from "./CartItemsList";
import { useCartContext } from "../../context/CartContext";
import emptyCart from "../../assets/empty-cart.png";
import { useUserContext } from "../../context/User.context";
import { Navigate, useNavigate } from "react-router-dom";
import { IoInformation } from "react-icons/io5";
import axios from "axios";
export default function Cart() {
  const { cartItems, setCartItems } = useCartContext();
  const { token } = useUserContext();
  const navigate = useNavigate();
  console.log(cartItems)
  const addOrder = async () => {
    const options = {
      url: `https://e-commerce-11-api.vercel.app/api/api/orders`,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        cart_id: cartItems?.id,
        total_price: `${cartItems?.reduce(
          (acc, item) =>
            Number((acc + item.product.price * item.quantity).toFixed(0)),
          0
        )}`,
        payment_method: "cash",
      },
    };
    try {
      let { data } = await axios.request(options);
      if (data.status == "success") {
        setCartItems(null);
        setTimeout(() => {
          navigate("/orders");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  if (token) {
    return (
      <div className="flex items-center justify-center py-3 font-inter">
        <div className="container flex flex-wrap items-start gap-4 px-4 md:px-10">
          <div className="flex-1 p-5 rounded-lg shadow bg-gray-100/20">
            <h2 className="mb-3 text-xl font-semibold">Shopping Cart</h2>
            <div className="flex flex-col gap-4">
              {cartItems?.length ? (
                <CartItemsList />
              ) : (
                <>
                  <img
                    src={emptyCart}
                    className="mx-auto max-w-2xs"
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
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <div className="size-6 p-0.5 flex items-center justify-center rounded-full text-primary-white bg-green-800">
                  <Check />
                </div>
                <p className="text-green-800">
                  Your order qualifies for FREE Shipping
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="size-5 p-0.5 flex items-center justify-center rounded-full bg-primary-white text-yellow border border-yellow">
                  <IoInformation />
                </div>
                <p className="text-sm font-semibold uppercase text-red">
                  Cash Only
                </p>
              </div>
            </div>
            <div>
              <p>
                Subtotal ({cartItems?.length} items):
                <span className="font-bold">
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
            <button
              onClick={() =>
                addOrder({
                  cart_id: cartItems?.id,
                  total_price: `${cartItems?.reduce(
                    (acc, item) =>
                      Number(
                        (acc + item.product.price * item.quantity).toFixed(0)
                      ),
                    0
                  )}`,
                  payment_method: "cash",
                })
              }
              className="rounded-full py-1.5 bg-yellow"
            >
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
