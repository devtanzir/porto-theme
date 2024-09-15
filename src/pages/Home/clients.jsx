import { Container } from "@mui/material";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { Autoplay, FreeMode } from "swiper/modules";

const Clients = () => {
  return (
    <>
      <Container className=" text-center">
        <h3 className="font-bold text-[32px]">
          We're not the only ones{" "}
          <span className="bg-[#0088CC] text-white capitalize px-3">happy</span>{" "}
          excited about Porto WordPress Theme...
        </h3>
        <p className="font-light text-[#0088CC] text-[17px] mt-3">
          20,000 customers in 100 countries use Porto Template. Meet our
          customers.
        </p>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          freeMode={true}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: true,
          }}
          modules={[FreeMode, Autoplay]}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 7,
              spaceBetween: 30,
            },
          }}
          className="py-14"
        >
          {[1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6].map((item) => (
            <SwiperSlide
              className={`select-none text-center`}
              key={Math.random()}
            >
              <img
                src={`/src/assets/brand${item}.png`}
                className="inline-block"
                alt=""
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </>
  );
};

export default Clients;
