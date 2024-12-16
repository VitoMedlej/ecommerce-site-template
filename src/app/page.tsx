import Hero from "@/Components/Hero/Hero";
import dynamic from "next/dynamic";
import { fetchHomePageSections, fetchSlides, HomePage, ProductsSection} from "@/app/Utils/functions/sanityFetcher";
import {CategoryCardsSection, HomeSectionData} from "./Utils/Types";
import {fetchHomeProducts} from "@/app/Utils/functions/dataFetchers";
import HomeSections from "@/Components/HomeSections/HomeSections";
import { ProcessHomeSectionsData } from "./Utils/functions/ProcessHomeSectionsData";

const Dialog = dynamic(() => import ('@/Components/Dialog/Dialog'));
const SignUpSection = dynamic(() => import ('@/Components/SignUpSection/SignUpSection'));
const AboutSection = dynamic(() => import ('@/Components/AboutSection/AboutSection'));



export default async function Home() {
    const slides = await fetchSlides(1000);

    const SanityHomeSections : HomePage[] | null = await fetchHomePageSections(1000)
    const HomeSectionWithData : HomeSectionData[] | null = await ProcessHomeSectionsData(SanityHomeSections && SanityHomeSections[0].sections)

    return (
        <main>
            <Dialog/>
            <Hero slides={slides}/>
            <HomeSections HomeSectionWithData={HomeSectionWithData}/>
            <SignUpSection/>
            <AboutSection/>
        </main>
    );
}
