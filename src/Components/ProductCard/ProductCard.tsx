"use client";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import React from "react";
import { IoStar } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { ProductData } from "@/app/Utils/Types";
import { validateImageUrl } from "@/app/Utils/ImageValidator";

const ProductCard = ({
  sx,
  product,
}: {
  sx?: SxProps<Theme> | undefined;
  product: ProductData;
}) => {
    const image = product?.images && product?.images?.length > 0 ? validateImageUrl(`${product?.images[0]}`) : validateImageUrl(null) 
  return (
    <Box
      className="relative"
      sx={{
        width: { xs: "100%" },
        ...sx,
      }}
    >
      <Box
        sx={{
          width: { xs: "100%" },
        }}
      >
        <img
          className="img"
          loading="lazy"
          src={image}
          alt={product.title}
        />
      </Box>
      <Box
        sx={{
          top: "3%",
          left: "5%",
          zIndex: 12,
          width: "90%",
        }}
        className="absolute flex justify-between"
      >
        <Box
          className="flex centered pointer"
          sx={{
            background: "#ffffff6e",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            p: 0,
          }}
        >
          <CiHeart fontSize="1.05em" />
        </Box>
        <Box
          className="flex centered pointer"
          sx={{
            background: "#ffffff6e",
            borderRadius: "50%",
            width: "30px",
            height: "30px",
            p: 0,
          }}
        >
          <IoEyeOutline fontSize="1.05em" />
        </Box>
      </Box>
      <Box
        className="flex center items-center gap1"
        sx={{
          py: 0.5,
        }}
      >
        <IoStar />
        <Typography className="fs075">4.2</Typography>
      </Box>
      <Box>
        <Typography className="fs1">{product.title}</Typography>
        <Typography className="fs075 gray">{product.category}</Typography>
        <Typography
          className="fs1 fw600"
          sx={{
            pt: 0.25,
          }}
        >
          ${product.price}
        </Typography>
      </Box>
    </Box>
  );
};

export default ProductCard;