import HeadingSlider from "../components/home/HeadingSlider";
import ProductsCard from "../components/home/ProductsCard";
import Slider from "../components/home/Slider";

function Home() {
  return (
    <section className="bg-section">
      <HeadingSlider />

      <div className="mt-[-60px] sm:mt-[-90px] md:mt-[-150px] z-50 lg:mt-[-190px] xl:mt-[-280px] relative space-y-4 px-10">
        <ProductsCard />

        <Slider />
      </div>
    </section>
  );
}

export default Home;
