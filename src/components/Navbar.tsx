import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import WhatsAppButton from "./WhatsAppButton";
import {
  IconContainer,
  LogoText,
  MobileMenuIcon,
  NavLink,
  NavLinks,
  StyledAppBar,
  StyledToolbar,
} from "./styles/StyledNavbar";
import { IconButton } from "@mui/material";

const Navbar: React.FC = () => {
  return (
    <StyledAppBar position="static">
      <StyledToolbar>
        {/* NOTE: Commenting out the LogoText for reference 
        <LogoText variant="h6">Khandan Enterprise</LogoText> */}

        <img
          src={`${process.env.PUBLIC_URL}/images/logo.png`}
          alt="Khandan Enterprise Logo"
          style={{
            height: "115px",
            maxWidth: "115px",
            objectFit: "contain",
          }}
        />

        {/* Desktop nav */}
        <NavLinks>
          {[
            "Toilet Cleaner",
            "Floor Cleaner",
            "Liquid Handwash",
            "Dish Washer Liquid",
          ].map((item) => (
            <NavLink key={item} variant="body1">
              {item}
            </NavLink>
          ))}
        </NavLinks>

        {/* Icons + WhatsApp */}
        <IconContainer>
          <WhatsAppButton />
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <PersonIcon />
          </IconButton>
          <IconButton>
            <ShoppingCartIcon />
          </IconButton>

          {/* Hamburger Menu - only visible on mobile */}
          <MobileMenuIcon>
            <MenuIcon />
          </MobileMenuIcon>
        </IconContainer>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default Navbar;
