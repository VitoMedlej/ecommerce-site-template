import Hero from "@/Components/Hero/Hero";
import dynamic from "next/dynamic";
import { fetchSlides} from "@/Utils/functions/sanityFetcher";
import HomeSections from "@/Components/HomeSections/HomeSections";
import { ProcessHomeSectionsData } from "@/Utils/functions/ProcessHomeSectionsData";
import { HomeSectionData } from "@/Utils/Types";
import ProductQuickView from "@/Components/ProductCard/QuickView/ProductQuickView";

const Dialog = dynamic(() => import ('@/Components/Dialog/Dialog'));
const SignUpSection = dynamic(() => import ('@/Components/SignUpSection/SignUpSection'));
const AboutSection = dynamic(() => import ('@/Components/AboutSection/AboutSection'));



export default async function Home() {
    const slides = await fetchSlides(0);
   
    const HomeSectionWithData : HomeSectionData[] | null = await ProcessHomeSectionsData()
   

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
