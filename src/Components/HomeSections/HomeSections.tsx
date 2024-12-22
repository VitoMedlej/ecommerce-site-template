// HomeSections.tsx
'use client'
import React from 'react'

// import { HomePage, ProductsSection } from '@/app/Utils/functions/sanityFetcher'
import ProductSection from '../ProductSection/ProductSection'
import CategorySection from '../CategorySection/CategorySection'
import { Card, HomeSectionData } from '@/app/Utils/Types'




const HomeSections = ({ HomeSectionWithData }: { HomeSectionWithData: HomeSectionData[] | null }) => {
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
    </>
  )
}

export default HomeSections
