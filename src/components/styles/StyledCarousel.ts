import styled from "@emotion/styled";
import { Box, Card, IconButton } from "@mui/material";

export const MainWrapper = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const ContentBox = styled(Box)({
  textAlign: "left",
  "@media (max-width: 768px)": {
    width: "100%",
    textAlign: "center",
  },
  "@media (min-width: 768px) and (max-width: 1024px)": {
    width: "90%",
  },
});

export const ControlsContainer = styled(Box)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "15px",
  marginTop: "30px",
});

export const DotsContainer = styled(Card)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "8px 22px",
  borderRadius: "30px",
  background: "white",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  transition: "box-shadow 0.3s ease",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
  },
});

export const Dot = styled("span")(({ active }: { active: boolean }) => ({
  width: active ? "6px" : "5px",
  height: active ? "6px" : "5px",
  borderRadius: "50%",
  background: active ? "#333" : "#ccc",
  margin: "0 5px",
  transition: "all 0.3s ease",
}));

export const StyledIconButton = styled(IconButton)({
  background: "white",
  color: "black",
  width: "22px",
  height: "22px",
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  transition: "background 0.3s ease, box-shadow 0.3s ease",
  boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
  "&:hover": {
    boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.3)",
    background: "white",
  },
});

export const CarouselItem = styled(Card)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  cursor: "pointer",
  padding: "16px",
  width: "100%",
  maxWidth: "400px", // INFO: Set a reasonable max width
  boxSizing: "border-box",
  transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",

  "@media (max-width: 767px)": {
    width: "65%",
  },

  "@media (min-width: 768px) and (max-width: 1024px)": {
    width: "90%",
  },
});

export const Image = styled("img")({
  width: "100%",
  height: "auto",
  maxHeight: "300px", // INFO: Ensures consistent height
  objectFit: "cover",
  borderRadius: "8px",
  transition: "transform 0.6s ease-in-out",
});

export const PriceContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  gap: "10px",
  marginTop: "10px",
});
