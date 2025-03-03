import { Link } from "react-router-dom";

function Card({ categories }) {
  return (
    <div className="bg-primary-white p-4 h-full flex flex-col">
      <h2 className="text-primary-black xl:text=[22px] lg:text-[20px] md:text-[18px] text-[16px] max-sm:text-center font-noto-serif-gujarati font-[700] leading-[31px] mb-2">
        {categories.name}
      </h2>

      <div className="grid grid-cols-2 gap-5 flex-grow">
        {categories.sub_categories.map((item, index) => (
          <div key={index}>
            <Link to={`products/category/${item.name}`}>
              <img
                src={item?.image}
                alt={item?.name}
                className="w-full h-auto object-cover aspect-square "
              />
            </Link>
            <p className="font-[400] text-[12px] leading-[17px] ">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      <Link
        to={`/products`}
        className="text-blue-dark text-[15px] leading-[21px] font-[500] mt-6 hover:underline self-start"
      >
        "See More"
      </Link>
    </div>
  );
}

export default Card;
