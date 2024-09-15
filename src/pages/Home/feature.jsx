import { Container } from "@mui/material";

import {
  SlLayers,
  SlPencil,
  SlScreenDesktop,
  SlSupport,
  SlUser,
} from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";
import { FaGoogle } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";
import FeatureCard from "../../components/shared/feature-card";
import Accordion from "../../components/shared/accordion";

const Feature = () => {
  return (
    <>
      <Container sx={{ display: { sm: "flex" }, alignItems: "flex-start" }}>
        <div className="w-full sm:w-2/3 inline-block">
          <h2 className="text-[28px] text-black font-bold mb-8">
            Our Features
          </h2>
          <div className="flex flex-wrap">
            <FeatureCard
              title={"Customer Support"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <SlSupport />
            </FeatureCard>
            <FeatureCard
              title={"Sliders"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <SlLayers />
            </FeatureCard>
            <FeatureCard
              title={"HTML5 / CSS3 / JS"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <IoDocumentOutline />
            </FeatureCard>
            <FeatureCard
              title={"Icons"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <SlUser />
            </FeatureCard>
            <FeatureCard
              title={"500+ Google Fonts"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <FaGoogle />
            </FeatureCard>
            <FeatureCard
              title={"Buttons"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <IoMdMenu />
            </FeatureCard>
            <FeatureCard
              title={"Colors"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <SlPencil />
            </FeatureCard>
            <FeatureCard
              title={"Lightbox"}
              description={`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus blandit massa`}
            >
              <SlScreenDesktop />
            </FeatureCard>
          </div>
        </div>
        <div className="w-full sm:w-1/3 inline-block">
          <h2 className="text-[25px] text-black font-normal mb-8">
            and more...
          </h2>
          <Accordion />
        </div>
      </Container>
    </>
  );
};

export default Feature;
