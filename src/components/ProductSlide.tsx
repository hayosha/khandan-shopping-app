import React from "react";
import { Typography } from "@mui/material";
import { CarouselItem, ContentBox, Image } from "./styles/StyledCarousel";

interface ProductProps {
  product: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
}

const ProductSlide: React.FC<ProductProps> = ({ product }) => {
  return (
    <CarouselItem>
      <Image src={product.image} alt={product.title} />
      <ContentBox>
        <Typography variant="h5" gutterBottom>
          {product.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {product.description}
        </Typography>
        <Typography variant="h6">{product.price}</Typography>
      </ContentBox>
    </CarouselItem>
  );
};

export default ProductSlide;
