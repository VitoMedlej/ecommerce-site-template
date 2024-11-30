
import Hero from "@/Components/Hero/Hero";
import ProductSection from "@/Components/ProductSection/ProductSection";
import CategorySection from "@/Components/CategorySection/CategorySection";
// import PerksSection from "@/Components/PerksSection/PerksSection";
import SignUpSection from "@/Components/SignUpSection/SignUpSection";
import AboutSection from "@/Components/AboutSection/AboutSection";
import Dialog from "@/Components/Dialog/Dialog";
import { fetchSlides } from "@/functions/sanityFetcher";
import { HeroSlide } from "./Utils/Types";

export default async function Home() {
  const slides : HeroSlide[] | null = await fetchSlides(6000);
  return (
    <>
          <Dialog/>
          <Hero slides={slides} />
          <ProductSection/>
          <CategorySection/>
          <SignUpSection/>
          <AboutSection/>
    </>
  );
}
