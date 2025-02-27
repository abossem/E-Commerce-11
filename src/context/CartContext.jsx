import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useUserContext } from "./User.context";

const CartContext = createContext();

export default function CartContextProvider({ children }) {
  const token = useUserContext();
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
    try {
      await axios.post(
        "https://e-commerce-11-api.vercel.app/api/api/cart",
        { ...product },
        {
          headers: {
            Authorization: `Bearer 3|s6YifE6Pd0OgAq7cTuM6zgFFfG9drkYXBeZsnV562b4f156c`,
          },
        }
      );
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
            Authorization: `Bearer 3|s6YifE6Pd0OgAq7cTuM6zgFFfG9drkYXBeZsnV562b4f156c`,
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
            Authorization: `Bearer 3|s6YifE6Pd0OgAq7cTuM6zgFFfG9drkYXBeZsnV562b4f156c`,
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
