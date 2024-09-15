import { Container } from "@mui/material";
import Divider from "../../components/shared/divider";
import Button from "../../components/shared/button";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { Link } from "react-router-dom";

const TeamCard = ({ member, index, currentUsers, singleUser = false }) => {
  return (
    <>
      <Container>
        <div
          className={`flex py-8 ${
            !singleUser && index % 2 !== 0 && "flex-row-reverse"
          }`}
        >
          <div className="px-3 w-[665px]">
            <h3 className="text-3xl text-[#222] font-bold capitalize">
              {member.name}
            </h3>
            <span className="text-sm font-bold text-[#08c] mb-[14px] uppercase">
              {member.role}
            </span>
            <p className="text-[#777] mb-5 text-[18px]">{member.description}</p>
            <p className="text-sm text-[#777]">{member.para}</p>
            <Divider />
            <div className="flex justify-between items-center">
              <div>
                <Button text={"Get in touch"} />
                {!singleUser && (
                  <Link to={`/team/${member.name}`}>
                    <Button text={"More"} primary />
                  </Link>
                )}
              </div>
              <div className="flex gap-3 items-center">
                <span className="text-[11px] font-bold uppercase text-black mr-[15px]">
                  Follow me
                </span>
                <span className="p-2 bg-white shadow-md text-[13px] cursor-pointer rounded-full transition hover:bg-[#4E6AA4] hover:text-white">
                  <TfiFacebook />
                </span>
                <span className="p-2 bg-white shadow-md text-[13px] cursor-pointer rounded-full transition hover:bg-[#000] hover:text-white">
                  <RiTwitterXLine />
                </span>
                <span className="p-2 bg-white shadow-md text-[13px] cursor-pointer rounded-full transition hover:bg-[#1981BA] hover:text-white">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
          <div className="px-3 w-[451px] h-[451px]">
            <img src={member.image} alt={member.name} />
          </div>
        </div>
        {!singleUser && index !== currentUsers?.length - 1 && <Divider />}
      </Container>
    </>
  );
};

export default TeamCard;
