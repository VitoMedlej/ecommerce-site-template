
import Hero from "@/Components/Hero/Hero";
import dynamic from "next/dynamic";
import ProductSection from "@/Components/ProductSection/ProductSection";
// import PerksSection from "@/Components/PerksSection/PerksSection";
const Dialog = dynamic(() => import('@/Components/Dialog/Dialog'));

import { fetchCardSection, fetchHomePageSections, fetchSlides, HomePage } from "@/functions/sanityFetcher";
import { CategoryCardsSection, HeroSlide } from "./Utils/Types";
import { fetchHomeProducts } from "@/functions/dataFetchers";
import HomeSections from "@/Components/HomeSections/HomeSections";
const CategorySection = dynamic(() => import('@/Components/CategorySection/CategorySection'));
const SignUpSection = dynamic(() => import('@/Components/SignUpSection/SignUpSection'));
const AboutSection = dynamic(() => import('@/Components/AboutSection/AboutSection'));


export default async function Home() {
  const slides = await fetchSlides(1000);
  // const cardsSection = await fetchCardSection(100);
  // const data = await fetchHomeProducts();
    const HomePageSections : HomePage[] | null = await fetchHomePageSections(1000)
    // console.log('productSections: ', productSections);
  return (
    <>
          <Dialog/>
          <Hero slides={slides} />
          <HomeSections HomePageSections={HomePageSections}/>
          {/* <ProductSection data={productSections}/> */}
          <CategorySection data={null}/>
          <SignUpSection/>
          <AboutSection/>
    </>
  );
}
