export function cardCategory(num) {
  return Array(num).fill({
    title: "Appliances for your home | Up to 55% off",
    items: [
      { name: "Air Conditioners", image: "/heading-slider.png" },
      { name: "Refrigerators", image: "/heading-slider.png" },
      { name: "Air Conditioners", image: "/heading-slider.png" },
      { name: "Refrigerators", image: "/heading-slider.png" },
    ],
    link: "Explore all",
    to: "/allProducts",
  });
}
