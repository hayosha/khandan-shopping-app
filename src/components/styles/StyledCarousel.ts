import styled from "@emotion/styled";
import { Box, Card, IconButton } from "@mui/material";

export const MainWrapper = styled(Box)({
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const CarouselItem = styled(Card)({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  justifyContent: "space-between",
  boxSizing: "border-box",
  gap: "15px",
  transition: "transform 0.6s ease-in-out, opacity 0.6s ease-in-out",
  "@media (max-width: 768px)": {
    flexDirection: "column",
    textAlign: "center",
  },
});

export const Image = styled("img")({
  width: "50%",
  maxHeight: "350px",
  objectFit: "cover",
  transition: "transform 0.6s ease-in-out",
  "@media (max-width: 768px)": {
    width: "100%",
  },
});

export const ContentBox = styled(Box)({
  width: "50%",
  textAlign: "left",
  "@media (max-width: 768px)": {
    width: "100%",
    textAlign: "center",
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
