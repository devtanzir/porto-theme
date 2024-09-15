import { Container } from "@mui/material";
import React from "react";
import BreadCrumbs from "../shared/breadcrumbs";

const FooterBottom = () => {
  return (
    <section className="bg-[#1C2023] py-8">
      <Container>
        <div className="flex justify-between items-center flex-col sm:flex-row">
          <div className=" flex gap-4">
            <img
              className="w-[49px]"
              src="/src/assets/footer-logo.png"
              alt="footer-logo"
            />
            <p className="text-[11px] text-[#555]">
              © copyright 2024. All Rights Reserved.
            </p>
          </div>
          <div className="flex gap-3 mt-5 sm:mt-0">
            <BreadCrumbs
              title={"FAQ'S"}
              className={"text-[11px] hover:text-white"}
              classIcon={"text-[7px]"}
            />
            <BreadCrumbs
              title={"Sitemap"}
              className={"text-[11px] hover:text-white"}
              classIcon={"text-[7px]"}
            />
            <BreadCrumbs
              title={"Contact Us"}
              className={"text-[11px] hover:text-white"}
              classIcon={"text-[7px]"}
            />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default FooterBottom;
