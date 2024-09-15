import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { Box, Typography } from "@mui/material";

const Slider = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="h-[670px] mt-[125px] w-full"
      >
        <SwiperSlide
          style={{
            background:
              "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-1.jpg)",
          }}
          className="flex justify-center items-center flex-col"
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                color: "#fff",
                textTransform: "uppercase",
                position: "relative",
                ":before": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  left: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
                ":after": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  right: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
              }}
            >
              Do You Need a{" "}
              <Typography
                component={"span"}
                sx={{
                  fontSize: "21px",
                  position: "relative",
                  ":after": {
                    content: `""`,
                    display: "inline-block", // To show the image
                    width: "70px", // Set the width of the image
                    height: "10px", // Set the height of the image
                    backgroundImage:
                      "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2018/11/slide-blue-line.png)", // Replace with your image URL
                    backgroundSize: "cover", // Adjust to cover the entire area
                    backgroundPosition: "center",
                    position: "absolute", // Use this if you need precise positioning
                    right: "0", // Adjust as needed to position the image
                    top: "30px", // Center vertically
                    transform: "translateY(-50%)",
                  },
                }}
              >
                NEW
              </Typography>
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: "49px",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Web Design?
          </Typography>
          <Typography
            component="h2"
            sx={{ fontSize: "17px", fontWeight: 400, color: "#ffffffb3" }}
          >
            Check out our options and features
          </Typography>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-2.jpg)",
          }}
          className="flex justify-center items-center flex-col"
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                color: "#fff",
                textTransform: "uppercase",
                position: "relative",
                ":before": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  left: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
                ":after": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  right: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
              }}
            >
              The Best Design
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: "49px",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
            }}
          >
            Web Design?
          </Typography>
          <Typography
            component="h2"
            sx={{
              fontSize: "17px",
              fontWeight: 400,
              color: "#ffffffb3",
              maxWidth: "540px",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            Trusted by over 40,000 satisfied users, Porto is a huge success in
            the one of largest world's MarketPlace
          </Typography>
        </SwiperSlide>
        <SwiperSlide
          style={{
            background:
              "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-intro-3.jpg)",
          }}
          className="flex justify-center items-center flex-col"
        >
          <Box sx={{ display: "flex", gap: "10px" }}>
            <Typography
              component="h2"
              sx={{
                fontWeight: 500,
                fontSize: "21px",
                color: "#fff",
                textTransform: "uppercase",
                position: "relative",
                ":before": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  left: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
                ":after": {
                  content: `""`,
                  display: "inline-block", // To show the image
                  width: "37px", // Set the width of the image
                  height: "10px", // Set the height of the image
                  backgroundImage:
                    "url(https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2022/07/wpb-co-slide-title-border.png)", // Replace with your image URL
                  backgroundSize: "cover", // Adjust to cover the entire area
                  backgroundPosition: "center",
                  position: "absolute", // Use this if you need precise positioning
                  right: "-58px", // Adjust as needed to position the image
                  top: "50%", // Center vertically
                  transform: "translateY(-50%)",
                },
              }}
            >
              We create designs, we are
            </Typography>
          </Box>

          <Typography
            component="h2"
            sx={{
              fontSize: "144px",
              fontWeight: 800,
              color: "white",
              textTransform: "uppercase",
              letterSpacing: "-20px",
              lineHeight: "127px",
            }}
          >
            Porto
          </Typography>
          <Typography
            component="h2"
            sx={{ fontSize: "17px", fontWeight: 400, color: "#ffffffb3" }}
          >
            The best choice for your new website
          </Typography>
        </SwiperSlide>
      </Swiper>
    </>
  );
};
export default Slider;
