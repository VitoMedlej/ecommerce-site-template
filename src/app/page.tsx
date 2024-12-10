
import Hero from "@/Components/Hero/Hero";
import dynamic from "next/dynamic";
import ProductSection from "@/Components/ProductSection/ProductSection";
// import PerksSection from "@/Components/PerksSection/PerksSection";
const Dialog = dynamic(() => import('@/Components/Dialog/Dialog'));

import { fetchCardSection, fetchSlides } from "@/functions/sanityFetcher";
import { CategoryCardsSection, HeroSlide } from "./Utils/Types";
const CategorySection = dynamic(() => import('@/Components/CategorySection/CategorySection'));
const SignUpSection = dynamic(() => import('@/Components/SignUpSection/SignUpSection'));
const AboutSection = dynamic(() => import('@/Components/AboutSection/AboutSection'));


export default async function Home() {
  const slides : HeroSlide[] | null = await fetchSlides(1000);
  const cardsSection : CategoryCardsSection | null = await fetchCardSection(100);
  return (
    <>
          <Dialog/>
          <Hero slides={slides} />
          <ProductSection/>
          <CategorySection data={cardsSection}/>
          <SignUpSection/>
          <AboutSection/>
    </>
  );
}
