import { useHomeContext } from "../../context/homeContext";
import Card from "./Card";

function ProductsCard() {
  const { categories } = useHomeContext();

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  z-50 max-w-auto">
      {categories.map((category, index) => (
        <Card key={index} categories={category} />
      ))}
    </div>
  );
}

export default ProductsCard;
