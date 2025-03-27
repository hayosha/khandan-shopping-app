import React from "react";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import Navbar from "../components/Navbar";
import ProductCarousel from "../components/ProductCarousel";
import theme from "../theme";
import { Background, GradientBlob } from "../components/styles/StyledHomePage";

const HomePage: React.FC = () => {
  return (
    // NOTE: Commenting out simple design code for reference
    // <ThemeProvider theme={theme}>
    //   <CssBaseline />
    //   <Box
    //     sx={{
    //       position: "relative",
    //       minHeight: "100vh",
    //       background: "#E3FDFD",
    //       overflow: "hidden",
    //     }}
    //   >
    //     {/* ✅ Blurred white blob - Top Right */}
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         top: "-100px",
    //         right: "-100px",
    //         width: "300px",
    //         height: "300px",
    //         background: "white",
    //         borderRadius: "50%",
    //         opacity: 0.7,
    //         zIndex: 0,
    //         pointerEvents: "none", // Prevents it from affecting user interaction
    //       }}
    //     />

    //     {/* ✅ Optional: Another blob - Bottom Left */}
    //     <Box
    //       sx={{
    //         position: "absolute",
    //         bottom: "-120px",
    //         left: "-120px",
    //         width: "300px",
    //         height: "300px",
    //         background: "white",
    //         borderRadius: "50%",
    //         opacity: 0.5,
    //         zIndex: 0,
    //         pointerEvents: "none",
    //       }}
    //     />

    //     {/* ✅ Navbar */}
    //     <Box sx={{ position: "relative", zIndex: 2 }}>
    //       <Navbar />
    //     </Box>

    //     {/* ✅ Product Carousel or content */}
    //     <Box sx={{ position: "relative", zIndex: 2 }}>
    //       <ProductCarousel />
    //     </Box>
    //   </Box>
    // </ThemeProvider>

    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background>
        {/* Blobs */}
        <GradientBlob
          sx={{
            top: "-150px",
            left: "-100px",
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle at 30% 30%, #a5f3fc, #f0abfc)",
          }}
        />
        <GradientBlob
          sx={{
            top: "300px",
            right: "-150px",
            width: "500px",
            height: "500px",
            background: "radial-gradient(circle at 70% 50%, #c084fc, #93c5fd)",
          }}
        />
        <GradientBlob
          sx={{
            bottom: "-100px",
            left: "200px",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle at 40% 60%, #fde68a, #fca5a5)",
          }}
        />

        {/* Navbar */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <Navbar />
        </Box>

        {/* Carousel */}
        <Box sx={{ position: "relative", zIndex: 1 }}>
          <ProductCarousel />
        </Box>
      </Background>
    </ThemeProvider>
  );
};

export default HomePage;
