import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  Button,
} from "@mui/material";
import { styled } from "@mui/material/styles";

export const StyledAppBar = styled(AppBar)({
  background: "transparent",
  boxShadow: "none",
  borderBottom: "none",
  position: "relative",
  zIndex: 1,
});

export const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const LogoText = styled(Typography)({
  fontWeight: 700,
  fontSize: "1.2rem",
  color: "#333",
});

// Nav links - hidden on small screens
export const NavLinks = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

export const NavLink = styled(Typography)({
  cursor: "pointer",
  color: "#333",
});

export const IconContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  gap: theme.spacing(1),
}));

// Hamburger icon - visible only on small screens
export const MobileMenuIcon = styled(IconButton)(({ theme }) => ({
  display: "none",
  [theme.breakpoints.down("md")]: {
    display: "inline-flex",
  },
}));

export const WhatsAppStyledButton = styled(Button)({
  backgroundColor: "transparent",
  color: "#25D366",
  border: "2px solid #25D366",
  textTransform: "none",
  fontSize: "14px",
  fontWeight: "bold",
  borderRadius: "25px",
  padding: "8px 16px",
  transition: "all 0.5s ease-in-out",
  "&:hover": {
    backgroundColor: "#25D366",
    color: "white",
    boxShadow: "0px 4px 10px rgba(37, 211, 102, 0.3)",
    borderColor: "#1EBE5D",
    transform: "scale(1.02)",
  },
});
