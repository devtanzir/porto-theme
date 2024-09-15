import { Container, Typography } from "@mui/material";
import PostCard from "./latest-post-card";
import Testimonial from "./testimonial";

const PortoMap = () => {
  return (
    <>
      <Typography
        component={"div"}
        sx={{
          background: "url(/src/assets/world-map.png) center 0 no-repeat",
          paddingTop: "164px",
          marginTop: "15px",
        }}
      >
        <div className="bg-[rgba(251,251,251,.7)] pt-[90px] pb-10">
          <Container className="flex flex-col lg:flex-row">
            <div className="lg:w-1/2 w-full px-10">
              <h3 className="font-bold text-[25px] mb-8">Latest Posts</h3>
              <div className="flex flex-wrap justify-center">
                <PostCard
                  title={`This is a standard embedded video post`}
                  description={`Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....`}
                  date={"11"}
                  month={"JUN"}
                />
                <PostCard
                  className={"hidden sm:flex"}
                  title={`This is a standard image gallery thumbs post`}
                  description={`Quisque elementum nibh at dolor pellentesque, a eleifend libero pharetra. Mauris neque felis, volutpat nec ullamcorper eget, sagittis vel enim....`}
                  date={"15"}
                  month={"JUN"}
                />
              </div>
            </div>
            <div className="lg:w-1/2 w-full px-10">
              <h3 className="font-bold text-[25px] mb-8">What Client's Say</h3>
              <Testimonial />
            </div>
          </Container>
        </div>
      </Typography>
    </>
  );
};

export default PortoMap;
