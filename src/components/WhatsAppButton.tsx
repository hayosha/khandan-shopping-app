import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { WhatsAppStyledButton } from "./styles/StyledNavbar";

const WhatsAppButton = () => {
  const phoneNumber = "7984365454";
  const message = "Hello, I'm interested in your products!";

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  return (
    <WhatsAppStyledButton
      variant="outlined"
      startIcon={<WhatsAppIcon />}
      onClick={handleClick}
    >
      Contact us on WhatsApp
    </WhatsAppStyledButton>
  );
};

export default WhatsAppButton;
