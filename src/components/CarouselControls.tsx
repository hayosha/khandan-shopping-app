import React from "react";
import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";
import {
  ControlsContainer,
  DotsContainer,
  Dot,
  StyledIconButton,
} from "./styles/StyledCarousel";

interface CarouselControlsProps {
  swiperRef: React.MutableRefObject<any>;
  total: number;
  activeIndex: number;
}

const CarouselControls: React.FC<CarouselControlsProps> = ({
  swiperRef,
  total,
  activeIndex,
}) => {
  const goPrev = () => swiperRef.current?.slidePrev();
  const goNext = () => swiperRef.current?.slideNext();

  return (
    <ControlsContainer>
      <StyledIconButton onClick={goPrev}>
        <ArrowBackIos sx={{ fontSize: "10px" }} />
      </StyledIconButton>

      <DotsContainer>
        {[...Array(total)].map((_, index) => (
          <Dot key={index} active={index === activeIndex} />
        ))}
      </DotsContainer>

      <StyledIconButton onClick={goNext}>
        <ArrowForwardIos sx={{ fontSize: "10px" }} />
      </StyledIconButton>
    </ControlsContainer>
  );
};

export default CarouselControls;
