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
    price: "₹500.00",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 7,
    image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 8,
    image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
    title: "Aurora",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
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
          speed={1200} // INFO: Smoother effect
          onBeforeInit={(swiper: any) => (swiperRef.current = swiper)}
          breakpoints={{
            320: { slidesPerView: 2, spaceBetween: 10, centeredSlides: true }, // INFO: Sets product center
            768: { slidesPerView: 3, spaceBetween: 15 },
            1024: {
              slidesPerView: 2.5,
              spaceBetween: 30,
            },
          }}
        >
          {products.map((product, index) => (
            <SwiperSlide
              key={index}
              style={{ display: "flex", justifyContent: "center" }}
            >
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
