export const validateImageUrl = (imageUrl: string | null): string => {
    // Check if the image URL starts with https://
    if (imageUrl && imageUrl.startsWith('https://')) {
      return imageUrl;
    }
  

    return process.env.NOT_FOUND_IMAGE || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTvGPEc8bhcT2Zl66lisGIPqVJ3PhKD8Xvzw&s'; // fallback to a local default image if env variable is not set
  };