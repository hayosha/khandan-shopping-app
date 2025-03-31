import React from "react";
import { Typography } from "@mui/material";
import {
  CarouselItem,
  ContentBox,
  Image,
  PriceContainer,
} from "./styles/StyledCarousel";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WhatsAppStyledButton } from "./styles/StyledNavbar";

interface ProductProps {
  product: {
    image: string;
    title: string;
    description: string;
    price: string;
  };
}

const ProductSlide: React.FC<ProductProps> = ({ product }) => {
  const phoneNumber = "7984365454";
  const message = `Hello, I want to buy this product: ${product.title} - ${product.price}`;

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };
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
        <PriceContainer>
          <Typography variant="h6">{product.price}</Typography>
          <WhatsAppStyledButton
            variant="outlined"
            startIcon={<WhatsAppIcon />}
            onClick={handleClick}
          >
            Buy with WhatsApp
          </WhatsAppStyledButton>
        </PriceContainer>
      </ContentBox>
    </CarouselItem>
  );
};

export default ProductSlide;
