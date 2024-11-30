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
  