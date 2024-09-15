import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { Box, IconButton } from "@mui/material";
const SocialSection = () => {
  return (
    <Box
      sx={{ display: "flex", gap: "10px", marginLeft: "10px", height: "40px" }}
    >
      <IconButton
        sx={{
          fontSize: "13px",
          color: "#333",
          width: "40px",
          transition: ".2s all ease-in-out",
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "#3b5a9a",
            color: "white",
          },
        }}
      >
        <FaFacebookF />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "13px",
          color: "#333",
          width: "40px",
          transition: ".2s all ease-in-out",
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "#000",
            color: "white",
          },
        }}
      >
        <BsTwitterX />
      </IconButton>
      <IconButton
        sx={{
          fontSize: "13px",
          color: "#333",
          width: "40px",
          transition: ".2s all ease-in-out",
          backgroundColor: "#fff",
          ":hover": {
            backgroundColor: "#1981BA",
            color: "white",
          },
        }}
      >
        <FaLinkedinIn />
      </IconButton>
    </Box>
  );
};

export default SocialSection;
