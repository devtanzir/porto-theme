import { Stack, Typography } from "@mui/material";
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
  return (
    <>
      <Typography
        component={"div"}
        variant="p"
        sx={{
          margin: "0 20px",
          ":after": {
            content: '""',
            position: "absolute",
            border: "10px solid #0099E6",
            left: "55px",
            bottom: "-20px",
            borderRightColor: "transparent",
            borderBottomColor: "transparent",
            borderLeftColor: "transparent",
          },
        }}
        className="bg-[#0099E6] py-10 pr-16 ps-[72px] text-white relative "
      >
        <Typography component={"p"}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          hendrerit vehicula est, in consequat. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Donec hendrerit vehicula est, in
          consequat.
        </Typography>

        <Typography
          component={"div"}
          variant="p"
          sx={{
            fontSize: "39px",
            position: "absolute",
            top: "20px",
            left: "20px",
          }}
        >
          <FaQuoteLeft />
        </Typography>
      </Typography>
      <Stack direction={"row"} alignItems={"center"} gap={"15px"} mt={"12px"}>
        <img
          src="/src/assets/john.jpeg"
          alt="user"
          className="w-[25px] h-[25px] rounded-full"
        />
        <Typography
          component={"p"}
          variant="p"
          sx={{ display: "flex", flexDirection: "column", gap: "5px" }}
        >
          <strong>John Smith</strong>
          <span className="text-[13px] font-semibold text-[#666]">
            CEO & Founder - Okler
          </span>
        </Typography>
      </Stack>
    </>
  );
};

export default Testimonial;
