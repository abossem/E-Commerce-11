import { Minus, Plus, Trash } from "lucide-react";
import { useCartContext } from "../../context/CartContext";
export default function CartItem(item) {
  const { updateItem, removeItemFromCart } = useCartContext();
  return (
    <div className="flex pt-2 border-t border-gray-100 items-center gap-4 flex-col md:flex-row md:items-center md:justify-betweenjustify-between">
      <div className="img-box">
        <img
          src={item.product.images[0]}
          className="max-w-3xs"
          alt="test img"
        />
      </div>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <div className="px-2">
            <h4 className="text-base">{item.product.name}</h4>

            <p className="text-sm py-1">{item.product.description}</p>
            <span className="text-xs text-green-600 font-semibold">
              In Stock {item.product.stock}
            </span>
          </div>
          <div className="flex items-center gap-3 pt-2">
            <div className="flex items-center gap-4 border border-yellow py-2 rounded-full px-4">
              {item.quantity === 1 ? (
                <button onClick={() => removeItemFromCart(item.product.id)}>
                  <Trash className="size-4 duration-300 hover:text-red" />
                </button>
              ) : (
                <button
                  onClick={() => updateItem(item.quantity - 1, item.product.id)}
                >
                  <Minus className="size-4" />
                </button>
              )}
              <span className="text-sm font-semibold">{item.quantity}</span>
              <button
                onClick={() => updateItem(item.quantity + 1, item.product.id)}
              >
                <Plus className="size-4" />
              </button>
            </div>
            <button onClick={() => removeItemFromCart(item.product.id)}>
              <Trash className="size-4 duration-300 hover:text-red" />
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <p>
            <span className="block text-primary-white w-fit py-0.5 px-1.5 text-xs bg-red rounded">
              {item.product.discount}% Off
            </span>
            EGP{item.product.price * item.quantity}
          </p>
        </div>
      </div>
    </div>
  );
}
