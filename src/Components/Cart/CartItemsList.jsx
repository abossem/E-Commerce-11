import { useCartContext } from "../../context/CartContext";
import Loading from "../loading/Loading";
import CartItem from "./CartItem";

export default function CartItemsList() {
  const { cartItems, loading } = useCartContext();
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        cartItems.map((item) => <CartItem key={item.id} {...item} />)
      )}
    </>
  );
}
