import { bannerImage } from "@/Utils/functions/sanityFetcher";

// types.ts
export interface HeroSlide {
    _createdAt: string; // ISO timestamp
    _id: string; // Unique ID
    cta: string; // Call to action text
    image: {
      _type: string; // Should always be 'image'
      asset: {
        _ref: string; // Reference to the image asset in Sanity
        _type: string; // Should always be 'reference'
      };
    };
    _type: string; // Should always be 'heroSlide'
    layoutStyle: 'left' | 'center'; // Layout options
    title: string; // Slide title
    _updatedAt: string; // ISO timestamp
    subtitle: string; // Subtitle text
    _rev: string; // Revision ID from Sanity
  }
  
  export type Slides = HeroSlide[];



  export interface Card {
    title: string;
    subtitle?: string;
    _key : string; 
    image: {
      asset: {
        _ref: string;
        _type: string;
      };
      hotspot?: {
        x: number;
        y: number;
        height: number;
        width: number;
      };
    };
    button?: string;
    link: string;
  }
  
  export interface CategoryCardsSection {
    _id: string;
    _type: 'categoryCardsSection';
    title: string;
    cards: Card[];

  }
  export type ProductData = {
    title: string;
    description: string;
    price: number;
    stock: number;
    tags: string[];
    category: string;
    subcategory: string;
    images: string[];
    id: string;
  };
  export interface ProductResponse {
    success: boolean;
    message: string;
    responseObject: ProductData[];
    statusCode: number;
  }

  export type HomeSectionData = {
    redirectUrl ?: string;
    Sectiontype: string;
    layout ?: string;
    bannerImage ?: bannerImage
    data : Card[] | ProductData[] | null;
    _id: string;
    title: string;
  }

  export type Section = {
    title: string;
    products: ProductData[];
    count ?: number;
  };
  
  export interface InfoState {
      fullName: string;
      city: string;
      email: string;
      phone: string;
      address1: string;
      address2?: string;
      checkbox: boolean;
      checkbox2: boolean;
    }