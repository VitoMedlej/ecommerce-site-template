// HomeSections.tsx
'use client'
import React from 'react'

import { HomePage, ProductsSection } from '@/functions/sanityFetcher'
import ProductSection from '../ProductSection/ProductSection'
import CategorySection from '../CategorySection/CategorySection'

const HomeSections = ({ HomePageSections }: { HomePageSections: HomePage[] | null }) => {
  return (
    <>
      { HomePageSections && HomePageSections[0]?.sections?.map((section) => {

        

        if (section._type === "productsSection") {

          return <ProductSection key={section._id} data={section} isHomePage={true} />
        } else {
          return <CategorySection key={section._id} data={section}/>

        }

      })}
    </>
  )
}

export default HomeSections
