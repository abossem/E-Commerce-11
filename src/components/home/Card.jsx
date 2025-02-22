function Card({ title, items, link, to }) {
  return (
    <div className="bg-primary-white p-4 h-full flex flex-col">
      {/* Title */}
      <h2 className="text-primary-black xl:text=[22px] lg:text-[20px] md:text-[18px] text-[16px] max-sm:text-center font-noto-serif-gujarati font-[700] leading-[31px] mb-2">
        {title}
      </h2>

      {/* Items Grid - Makes the link always push to the bottom */}
      <div className="grid grid-cols-2 gap-5 flex-grow">
        {items.map((item, index) => (
          <div key={index} className="">
            <a href={to}>
              <img
                src={item.image}
                alt="product-image"
                className="w-full h-auto object-cover aspect-square "
              />
            </a>
            <p className="font-[400] text-[12px] leading-[17px] ">
              {item.name}
            </p>
          </div>
        ))}
      </div>

      {/* See More Link - Always at the bottom */}
      <a
        href={to}
        className="text-blue-dark text-[15px] leading-[21px] font-[500] mt-6 hover:underline self-start"
      >
        {link || "See More"}
      </a>
    </div>
  );
}

export default Card;
