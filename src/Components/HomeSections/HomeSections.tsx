// HomeSections.tsx
'use client'
import React from 'react'

// import { HomePage, ProductsSection } from '@/Utils/functions/sanityFetcher'
import ProductSection from '../ProductSection/ProductSection'
import CategorySection from '../CategorySection/CategorySection'
import { Card, HomeSectionData } from '@/Utils/Types'
import { useQuickViewContext } from '@/Utils/Context/Contexts'
import ProductQuickView from '../ProductCard/QuickView/ProductQuickView'




const HomeSections = ({ HomeSectionWithData }: { HomeSectionWithData: HomeSectionData[] | null }) => {
const {product } = useQuickViewContext();
 
  // const req = await processProductsSection(HomePageSections)

  return (
    <>
      { HomeSectionWithData && HomeSectionWithData?.map((section) => {

        if (section.Sectiontype !== "categoryCardsSection") {

          return <ProductSection key={section._id} sectionDetails={section} isHomePage={true} />
        }  if (section.Sectiontype === "categoryCardsSection" && section.data)  {
          return <CategorySection key={section._id} sectionTitle={section.title} data={section.data as Card[]}/>
        }

      })}


        {product && <ProductQuickView/>}
    </>
  )
}

export default HomeSections
