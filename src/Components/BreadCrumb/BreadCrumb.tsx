'use client';

import { Breadcrumbs, Link, Typography, Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import NextLink from 'next/link';

const BreadcrumbsComponent = () => {
  const pathname = usePathname();

  // Split the pathname into parts and remove empty strings
  const pathParts = pathname.split('/').filter((part) => part);

  // Construct breadcrumb links
  const breadcrumbs = pathParts.map((part, index) => {
    const isLast = index === pathParts.length - 1;

    // Create the breadcrumb path up to the current part
    const breadcrumbPath = '/' + pathParts.slice(0, index + 1).join('/');

    // Capitalize the part for display
    const label = part.replace(/-/g, ' ').replace(/^\w/, (c) => c.toUpperCase());

    // If it's the last part, render as text
    if (isLast) {
      return (
        <Typography className='fs075' key={breadcrumbPath} color="text.primary" fontWeight="400">
          {label}
        </Typography>
      );
    }

    // Render as a clickable breadcrumb link
    return (
      <Link
      className='fs075'
        key={breadcrumbPath}
        component={NextLink}
        href={breadcrumbPath}
        underline="hover"
        color="inherit"
      >
        {label}
      </Link>
    );
  });

  return (
    <Box  className=''>
      <Breadcrumbs aria-label="breadcrumb">
        <Link className='fs075' component={NextLink} href="/" underline="hover" color="inherit">
          Home
        </Link>
        {breadcrumbs}
      </Breadcrumbs>
    </Box>
  );
};

export default BreadcrumbsComponent;
