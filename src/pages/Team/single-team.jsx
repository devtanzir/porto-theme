import { Container } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { teamMember } from "../../constants/team-member";
import TeamCard from "./team-card";
import WorkCard from "./work-card";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";

const SingleTeam = () => {
  const { memberId } = useParams();
  const member = teamMember.find((item) => item.name === memberId);
  return (
    <>
      <Helmet>
        <title>{memberId} - Porto</title>
      </Helmet>
      <div className="mt-[125px] bg-[#171717] py-3 border-b-[5px] border-[#ccc]">
        <Container className=" py-[15px] px-3">
          <div className=" flex gap-4">
            <Link className="text-xs text-[#08c] uppercase" to={"/"}>
              Home
            </Link>
            <span className="text-xs font-black text-[#777]">/</span>
            <Link className="text-xs text-[#08c] uppercase" to={"/team"}>
              Member
            </Link>
            <span className="text-xs font-black text-[#777]">/</span>
            <span className="text-xs text-[#777] uppercase">{memberId}</span>
          </div>
          <h4 className="text-[31px] inline-block text-white relative after:w-full after:absolute after:left-0 after:border-b-[5px] after:border-[#08c] after:top-[74px]">
            {memberId}
          </h4>
        </Container>
      </div>
      <Container>
        <div className="pt-8 px-3 pb-10">
          <TeamCard member={member} singleUser />
        </div>
      </Container>
      <div className="bg-[#F4F4F4]">
        <Container className=" flex justify-between items-center ">
          {member.skills.map((skill) => (
            <div
              key={skill.id}
              className="pt-[60px] pb-[30px] flex flex-col gap-3 flex-wrap"
            >
              <span className="text-[49px] text-[#08c]">{skill.icon}</span>
              <h4 className="text-lg font-bold text-[#222]">{skill.name}</h4>
              <p className="text-sm text-[#777]">{skill.description}</p>
            </div>
          ))}
        </Container>
      </div>
      <Container className="mt-[35px]">
        <h4 className="uppercase mb-[14px] font-bold text-[17px] text-[#222]">
          my work
        </h4>
        <Swiper
          slidesPerView={4}
          spaceBetween={0}
          freeMode={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          modules={[FreeMode, Pagination, Autoplay]}
        >
          {member.work.map((item) => (
            <SwiperSlide key={item.id}>
              <WorkCard work={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default SingleTeam;
