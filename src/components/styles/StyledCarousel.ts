import styled from "@emotion/styled";
import { Box, Card } from "@mui/material";
import { Swiper } from "swiper/react";
import { css } from "@emotion/react";

interface NavButtonProps {
  isTop?: boolean;
}

export const SwiperContainer = styled(Box)`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledSwiper = styled(Swiper)`
  width: 90%;
  max-width: 700px;
  height: 80%;

  .swiper-slide {
    display: flex;
    justify-content: center;
  }
`;

export const CarouselItem = styled(Card)`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  background: white;
  transition: transform 0.4s ease-in-out;
  cursor: grab;
  "&:active": {
    cursor: "grabbing";
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

export const Image = styled("img")`
  max-height: 300px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ContentBox = styled(Box)`
  margin-top: 16px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export const PriceContainer = styled(Box)`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const NavButton = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isTop",
})<NavButtonProps>`
  position: absolute;
  right: 20px;
  z-index: 10;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  cursor: pointer;

  ${(props) =>
    props.isTop
      ? css`
          top: 20px;
        `
      : css`
          bottom: 20px;
        `}

  &:hover {
    background-color: #f0f0f0;
  }

  &::after {
    display: none; // hide default Swiper arrow
  }
`;
