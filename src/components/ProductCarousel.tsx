import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {
  SwiperContainer,
  StyledSwiper,
  NavButton,
} from "./styles/StyledCarousel";
import { Navigation, Mousewheel } from "swiper/modules";
import ProductSlide from "./ProductSlide";

const products = [
  {
    id: 1,
    image: `${process.env.PUBLIC_URL}/images/product1.jpg`,
    title: "Floor Cleaner",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 2,
    image: `${process.env.PUBLIC_URL}/images/product2.jpg`,
    title: "Floor Cleaner",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 3,
    image: `${process.env.PUBLIC_URL}/images/product3.jpg`,
    title: "Liquid Handwash",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 4,
    image: `${process.env.PUBLIC_URL}/images/product4.jpg`,
    title: "Liquid Handwash",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 5,
    image: `${process.env.PUBLIC_URL}/images/product5.jpg`,
    title: "Toilet Cleaner",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 6,
    image: `${process.env.PUBLIC_URL}/images/product6.jpg`,
    title: "Toilet Cleaner",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 7,
    image: `${process.env.PUBLIC_URL}/images/product7.jpg`,
    title: "Liquid Handwash",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 8,
    image: `${process.env.PUBLIC_URL}/images/product8.jpg`,
    title: "Liquid Handwash",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 9,
    image: `${process.env.PUBLIC_URL}/images/product9.jpg`,
    title: "Matic Liquid Detergent",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
  {
    id: 10,
    image: `${process.env.PUBLIC_URL}/images/product10.jpg`,
    title: "Matic Liquid Detergent",
    description:
      "Bright sunset hues take center stage in this eye-catching design.",
    price: "₹500.00",
  },
];

const ProductCarousel = () => {
  return (
    <SwiperContainer>
      <StyledSwiper
        direction="vertical"
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={{
          forceToAxis: true,
          sensitivity: 0.5, // Slower scroll/swipe for smoother UX
        }}
        speed={800} // Smooth transition speed
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Navigation, Mousewheel]}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductSlide product={product} />
          </SwiperSlide>
        ))}
      </StyledSwiper>

      <NavButton className="swiper-button-prev" isTop sx={{ left: "auto" }}>
        ↑
      </NavButton>
      <NavButton className="swiper-button-next">↓</NavButton>
    </SwiperContainer>
  );
};

export default ProductCarousel;
