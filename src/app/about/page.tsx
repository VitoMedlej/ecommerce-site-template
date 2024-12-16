import { fetchAboutPage } from '@/app/Utils/functions/sanityFetcher';
import { Container, Box, Typography, Paper } from '@mui/material';
import React from 'react'

interface ImageAsset {
    _type: 'image';
    asset: {
      url: string | undefined;
      _ref: string; // Reference to the image asset
      _type: 'reference';
    };
    hotspot?: {
      x: number;
      y: number;
      height: number;
      width: number;
    };
  }

interface Block {
    _key: string; // Unique identifier for the block
    _type: 'block'; // Type of the block
    children: Array<{
      _key: string;
      _type: string;
      marks: string[];
      text: string;
    }>;
    markDefs: Array<{ _key: string; _type: string; [key: string]: unknown }>;
    style: string; // e.g., "normal", "h1", "h2", etc.
  }
export interface AboutPage {
    _id: string; // Sanity's unique document ID
    _type: 'aboutPage'; // The type of this document
    _createdAt: string; // ISO date string
    _updatedAt: string; // ISO date string
    title: string; // The title of the page
    heroImage?: ImageAsset; // Optional Hero Image with Sanity's image metadata
    introText?: string; // Optional introduction text
    brandQuote?: string; // Optional central quote or statement
    brandStory?: Block[]; // Array of rich text blocks for the brand story
    footerText?: string; // Optional footer text
  }

const Page = async () => {
  const aboutPage : AboutPage | null  = await fetchAboutPage(10000);
    if (!aboutPage) return <h1>Error loading about page, try refreshing</h1>
  return (
    <Container maxWidth="lg">
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" color="primary" gutterBottom>
          {aboutPage.title}
        </Typography>
      </Box>
  
      {aboutPage.heroImage?.asset && (
        <Box sx={{ mb: 4 }}>
          <img
            src={aboutPage.heroImage.asset.url}
            alt="Hero Image"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '12px',
              boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
            }}
          />
        </Box>
      )}
  
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" paragraph>
          {aboutPage.introText}
        </Typography>
      </Box>
  
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography >
          {`"{aboutPage.brandQuote}"`}
        </Typography>
      </Box>
  
      <Box sx={{ mb: 4 }}>
        <Typography variant="h5" color="primary" gutterBottom>
          Our Story
        </Typography>
        {aboutPage.brandStory?.map((block, index) => (
          <Paper
            key={index}
            sx={{
              p: 3,
              mb: 3,
              backgroundColor: '#f7f7f7',
              borderRadius: '8px',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography variant="body1" color="textPrimary">
              {block.children?.map((child) => child.text).join(' ')}
            </Typography>
          </Paper>
        ))}
      </Box>
  
      <Box sx={{ mb: 4 }}>
        <Typography variant="h6" color="secondary" gutterBottom>
          {aboutPage.footerText}
        </Typography>
      </Box>
    </Container>
  );
}

export default Page