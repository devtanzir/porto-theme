import { Container } from "@mui/material";
import Button from "../../components/shared/button";

const HeroBottom = () => {
  return (
    <>
      <section className="bg-[#0088CC]  py-10">
        <Container>
          <div className="w-full  md:w-2/3 inline-block">
            <h4 className="text-xl font-semibold text-white">
              The fastest way to grow your business with the leader in
              Technology
            </h4>
            <p className="w-full text-[#ffffffb3] text-base font-light mt-[5px]">
              Check out our options and features included.
            </p>
          </div>
          <div className=" md:w-1/3 inline-block text-end mt-3 md:mt-0">
            <Button text={"Get Started Now"} />
            <span className="text-white">or </span>
            <button className="text-sm font-semibold text-white cursor-pointer">
              Learn more
            </button>
          </div>
        </Container>
      </section>
    </>
  );
};

export default HeroBottom;
