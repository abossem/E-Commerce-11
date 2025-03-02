import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./User.context";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const { token } = useUserContext();
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const getUserCartItems = async () => {
    try {
      const { data } = await axios.get(
        "https://e-commerce-11-api.vercel.app/api/api/cart",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCartItems(data.data);
      console.log("🚀 ~ getUserCartItems ~ data:", data);
    } catch (error) {
      console.log("🚀 ~ getUserCartItems ~ error:", error);
    } finally {
      setLoading(false);
    }
  };
  const addItemToCart = async (product) => {
    const options = {
      url: "https://e-commerce-11-api.vercel.app/api/api/cart",
      method: "POST",
      headers: { Authorization: `Bearer ${token}` },
      data: { product_id: product.id, quantity: 1 },
    };
    try {
      // await axios.post(
      //   "https://e-commerce-11-api.vercel.app/api/api/cart",
      //   { ...product },
      //   {
      //     headers: {
      //       Authorization: `Bearer ${localStorage.getItem("token")}`,
      //     },

      //   },
      //   data: { product_id: product.id, quantity: 1 },
      // );
      let { data } = await axios.request(options);
      console.log("🚀 ~ addItemToCart ~ data:", data);
      await getUserCartItems();
    } catch (error) {
      console.log("🚀 ~ addItemToCart ~ error:", error);
    } finally {
      setLoading(false);
    }
  };
  const updateItem = async (quantity, productId) => {
    try {
      await axios.patch(
        `https://e-commerce-11-api.vercel.app/api/api/cart/${productId}`,
        { quantity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getUserCartItems();
    } catch (error) {
      console.log("🚀 ~ updateItem ~ error:", error);
    } finally {
      setLoading(false);
    }
  };
  const removeItemFromCart = async (productId) => {
    try {
      await axios.delete(
        `https://e-commerce-11-api.vercel.app/api/api/cart/${productId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      await getUserCartItems();
    } catch (error) {
      console.log("🚀 ~ removeItemFromCart ~ error:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    getUserCartItems();
  }, []);
  return (
    <CartContext.Provider
      value={{
        cartItems,
        loading,
        getUserCartItems,
        addItemToCart,
        updateItem,
        removeItemFromCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCartContext = () => {
  const context = useContext(CartContext);
  return context;
};
