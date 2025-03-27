import { useRef, useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { MainWrapper } from "./styles/StyledCarousel";
import ProductSlide from "./ProductSlide";
import CarouselControls from "./CarouselControls";
import { Box } from "@mui/material";

const products = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "$35.00",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "$35.00",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "$35.00",
  },
];

const ProductCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef<any>(null);

  return (
    <MainWrapper>
      <Box sx={{ maxWidth: "900px" }}>
        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow" // INFO: Enables coverflow effect
          coverflowEffect={{
            rotate: 20,
            stretch: 0,
            depth: 150,
            modifier: 1,
            slideShadows: false,
          }}
          onSlideChange={(swiper: any) => setActiveIndex(swiper.realIndex)}
          //  autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop
          slidesPerView="auto"
          centeredSlides={true}
          spaceBetween={30}
          speed={1200} // INFO: Smoother effect
          onBeforeInit={(swiper: any) => (swiperRef.current = swiper)}
        >
          {products.map((product, index) => (
            <SwiperSlide key={index} style={{ width: "80%" }}>
              <ProductSlide product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        <CarouselControls
          swiperRef={swiperRef}
          total={products.length}
          activeIndex={activeIndex}
        />
      </Box>
    </MainWrapper>
  );
};

export default ProductCarousel;
