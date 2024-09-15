import { Container } from "@mui/material";
import { Contact, FAQS } from "../../constants/footer";
import { Link } from "react-router-dom";
import SocialSection from "../shared/social-section";
import FooterBottom from "./footer-bottom";

const Footer = () => {
  return (
    <>
      <section className="bg-[#212529] pt-[76px] pb-[52px]">
        <Container>
          <div className="flex flex-wrap">
            <div className="lg:w-1/3 md:w-1/2 w-full md:px-3 mb-5 lg:mb-0">
              <h5 className="text-white text-[13px] uppercase font-semibold mb-4">
                Newsletter
              </h5>
              <p className="text-[13px] text-[#777] mb-5">
                Keep up on our always evolving product features and technology.
                Enter your e-mail address and subscribe to our newsletter.
              </p>
              <form>
                <div className="bg-[#DEDEDF] rounded-3xl w-[290px]">
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="bg-transparent  border-none outline-none py-2 pr-8 pl-5 text-[#777] text-[14px] placeholder:text-[#777] placeholder:text-[14px]"
                  />
                  <button
                    type="submit"
                    className="text-xs font-bold text-center inline-block p-4"
                  >
                    GO!
                  </button>
                </div>
              </form>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full md:px-3 mb-5 lg:mb-0">
              <h5 className="text-white text-[13px] uppercase font-semibold mb-4">
                Top 5 FAQs
              </h5>
              <ul>
                {FAQS.map((item) => (
                  <li key={item.id}>
                    <Link
                      className="text-[13px] text-[#777] transition hover:text-white"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/4 md:w-1/2 w-full md:px-3 mb-5 lg:mb-0">
              <h5 className="text-white text-[13px] uppercase font-semibold mb-4">
                Contact Us
              </h5>
              <ul>
                {Contact.map((item) => (
                  <li key={item.id} className="flex gap-3 items-center mb-2">
                    <span className="text-[#08c] text-base">{item.icon}</span>
                    <Link
                      className="text-[13px] text-[#777] transition hover:text-white"
                      href={item.path}
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="lg:w-1/6 md:w-1/2 w-full md:px-3">
              <h5 className="text-white text-[13px] uppercase font-semibold mb-4">
                Follow Us
              </h5>
              <SocialSection />
            </div>
          </div>
        </Container>
      </section>
      <FooterBottom />
    </>
  );
};

export default Footer;
