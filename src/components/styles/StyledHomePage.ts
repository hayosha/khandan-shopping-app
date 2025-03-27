import { Box, styled } from "@mui/material";

export const Background = styled(Box)({
  position: "relative",
  minHeight: "100vh",
  background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
  overflow: "hidden",
});

export const GradientBlob = styled(Box)({
  position: "absolute",
  borderRadius: "50%",
  opacity: 0.5,
  zIndex: 0,
});
