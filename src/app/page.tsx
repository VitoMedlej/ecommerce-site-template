
import Hero from "@/Components/Hero/Hero";
import ProductSection from "@/Components/ProductSection/ProductSection";
import CategorySection from "@/Components/CategorySection/CategorySection";
import PerksSection from "@/Components/PerksSection/PerksSection";
import SignUpSection from "@/Components/SignUpSection/SignUpSection";
import AboutSection from "@/Components/AboutSection/AboutSection";
import Dialog from "@/Components/Dialog/Dialog";

export default function Home() {
  return (
    <>
          <Dialog/>
          <Hero />
          <ProductSection/>
          <CategorySection/>
          <SignUpSection/>
          <AboutSection/>
    </>
  );
}
