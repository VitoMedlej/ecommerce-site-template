export const validateImageUrl = (imageUrl: string | null): string => {
    // Check if the image URL starts with https://
    if (imageUrl && imageUrl.startsWith('https://')) {
      return imageUrl;
    }
  
    // Return default image if URL is not valid
    return process.env.NOT_FOUND_IMAGE || '/default-image.jpg'; // fallback to a local default image if env variable is not set
  };