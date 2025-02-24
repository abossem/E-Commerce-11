// import { categories } from "../../data";
import Card from "./Card";
import { cardCategory } from "../../data";

function ProductsCard({ num }) {
  const categories = cardCategory(num);

  return (
    <div className="grid max-sm:grid-cols-1 grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5  z-50 max-w-auto">
      {categories.map((category, index) => (
        <Card key={index} {...category} />
      ))}
    </div>
  );
}

export default ProductsCard;
