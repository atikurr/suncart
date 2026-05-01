import Hero from "@/components/home/Hero";
import PopularProducts from "@/components/home/PopularProducts";
import Tips from "@/components/home/Tips";
import Brands from "@/components/home/Brands";

export default function Home() {
  return (
    <div>
      <Hero />
      <PopularProducts />
      <Tips />
      <Brands />
    </div>
  );
}
