import { Container } from "@mui/material";
import { Helmet } from "react-helmet";
import { CiFolderOn, CiMail, CiUser } from "react-icons/ci";
import { FaRegComments } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - Porto</title>
      </Helmet>
      <div className="bg-[#F7F7F7] mt-[125px] py-10">
        <Container className="py-[15px] px-3 flex justify-center items-center gap-3">
          <Link
            to={"/"}
            className="text-[#08c] uppercase text-xs cursor-pointer"
          >
            Home
          </Link>
          <span className="text-[10px] font-black text-[#777]">/</span>
          <Link
            to={"/blog"}
            className="text-[#08c] uppercase text-xs cursor-pointer"
          >
            Blog
          </Link>
          <span className="text-[10px] font-black text-[#777]">/</span>
          <Link
            to={"/"}
            className="text-[#08c] uppercase text-xs cursor-pointer"
          >
            Markup, Media
          </Link>
          <span className="text-[10px] font-black text-[#777]">/</span>
          <span className="text-[#777] text-xs uppercase">
            This is a standard slider gallery post
          </span>
        </Container>
      </div>
      <Container className="flex">
        <div className="pt-[35px] px-3 pb-10 w-1/4">
          <form>
            <div className="flex">
              <input
                type="text"
                className="py-2 px-3 border border-[rgba(0,0,0,0.08)] outline-none hover:outline-none text-[11px] text-[#777] w-full border-r-0 rounded-s"
                placeholder="Search"
              />
              <button
                type="submit"
                className="text-[13px] text-white bg-[#222] py-2 px-3 rounded-r"
              >
                <IoSearchSharp />
              </button>
            </div>
          </form>
          <div className="my-[30px]">
            <h4 className="text-sm font-bold uppercase text-[#222] mb-[15px]">
              categories
            </h4>
            <ul className="flex gap-3 flex-col text-[#666] text-[13px]">
              <li>
                <span>{">"}</span> Articles
              </li>
              <li className="ml-6">
                <span>{">"}</span> Asides
              </li>
              <li className="ml-6">
                <span>{">"}</span> News
              </li>
              <li>
                <span>{">"}</span> Buying
              </li>
              <li className="ml-6">
                <span>{">"}</span> Clerkship
              </li>
              <li className="ml-6">
                <span>{">"}</span> Clothes
              </li>
              <li>
                <span>{">"}</span> Markup
              </li>
              <li className="ml-6">
                <span>{">"}</span> Equipollent
              </li>
              <li className="ml-6">
                <span>{">"}</span> Media
              </li>
              <hr />
            </ul>
          </div>
          <div className="mb-5">
            <h4 className="text-sm font-bold uppercase text-[#222] mb-[15px]">
              latest posts
            </h4>
            <ul className="flex flex-col gap-5">
              <li className="flex gap-2 items-center">
                <img
                  src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-11-85x85.jpg"
                  alt="post-image"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#08c]">
                    This is a standard embedded video post
                  </h4>
                  <p className="text-[11px] text-[#898989]">june 10, 2016</p>
                </div>
              </li>
              <hr />
              <li className="flex gap-2 items-center">
                <img
                  src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-24-85x85.jpg"
                  alt="post-image"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#08c]">
                    This is a standard embedded video post
                  </h4>
                  <p className="text-[11px] text-[#898989]">june 10, 2016</p>
                </div>
              </li>
              <hr />
              <li className="flex gap-2 items-center">
                <img
                  src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-13-85x85.jpg"
                  alt="post-image"
                  className="w-[50px] h-[50px]"
                />
                <div>
                  <h4 className="text-sm font-bold text-[#08c]">
                    This is a standard embedded video post
                  </h4>
                  <p className="text-[11px] text-[#898989]">june 10, 2016</p>
                </div>
              </li>
            </ul>
          </div>
          <h4 className="text-sm font-bold uppercase text-[#222] mb-[15px]">
            About Us
          </h4>
          <p className="text-sm text-[#777]">
            Nulla nunc dui, tristique in semper vel, congue sed ligula. Nam
            dolor ligula, faucibus id sodales in, auctor fringilla libero. Nulla
            nunc dui, tristique in semper vel. Nam dolor ligula, faucibus id
            sodales in, auctor fringilla libero.
          </p>
        </div>
        <div className="pt-[35px] px-3 pb-10 w-3/4 ">
          <img
            src="https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/blog-21.jpg"
            alt="blog-post"
          />
          <div className="flex gap-3 mt-5">
            <div className="flex flex-col">
              <span className="text-base font-bold text-[#08c] bg-[#f4f4f4] py-[10px] px-3">
                13
              </span>
              <span className="text-[13px] text-white bg-[#08c] py-2 px-2">
                Jun
              </span>
            </div>
            <div>
              <h3 className="text-3xl font-bold text-[#08c]">
                This is a standard slider gallery post
              </h3>
              <div className="text-[13px] flex gap-3 mt-4">
                <span className="text-[#777] flex gap-1 items-center">
                  <CiUser /> By
                </span>
                <span className="text-[#08c] flex gap-1 items-center">
                  Joe Doe
                </span>
                <span className="text-[#08c] flex gap-1 items-center">
                  <span className="text-[#777]">
                    <CiFolderOn />
                  </span>{" "}
                  Markup, Media
                </span>
                <span className="text-[#08c] flex gap-1 items-center">
                  <span className="text-[#777]">
                    <CiMail />
                  </span>{" "}
                  Gallery, Pictures
                </span>
                <span className="text-[#08c] flex gap-1 items-center">
                  <span className="text-[#777]">
                    <FaRegComments />
                  </span>{" "}
                  3 Comments
                </span>
              </div>
            </div>
          </div>
          <div className="mt-5 flex flex-col gap-5 text-sm text-[#777]">
            <p>
              Quisque elementum nibh at dolor pellentesque, a eleifend libero
              pharetra. Mauris neque felis, volutpat nec ullamcorper eget,
              sagittis vel enim. Nam sit amet ante egestas, gravida tellus
              vitae, semper eros. Nullam mattis mi at metus egestas, in
              porttitor lectus sodales. Lorem ipsum dolor sit amet, consectetur
              adipisicing elit. Voluptate laborum vero voluptatum.
            </p>
            <p>
              Lorem quasi aliquid maiores iusto suscipit perspiciatis a
              aspernatur et fuga repudiandae deleniti excepturi nesciunt animi
              reprehenderit similique sit. ipsum dolor sit amet, consectetur
              adipisicing elit. Qui at laborum nulla quae quibusdam molestias
              earum suscipit dolorum debitis hic sint asperiores maxime deserunt
              neque explicabo molestiae autem totam illum?
            </p>
            <p>
              Maecenas semper aliquam massa. Praesent pharetra sem vitae nisi
              eleifend molestie. Aliquam molestie scelerisque ultricies.
              Suspendisse potenti. Phasellus interdum risus at mi ullamcorper
              lobortis. In et metus aliquet, suscipit leo.
            </p>
            <p>
              Donec sed tincidunt lacus. Duis vehicula aliquam vestibulum.
              Aenean at mollis mi. Cras ac urna sed nisi auctor venenatis ut id
              sapien. Vivamus commodo lacus lorem, a tristique sapien tempus
              non. Donec fringilla cursus porttitor. Morbi quis massa id mi
              pellentesque placerat. Nam scelerisque sit amet diam id blandit.
              Nullam ultrices ligula at ligula tincidunt, sit amet aliquet mi
              pellentesque. Aenean eget fermentum risus. Aenean eu ultricies
              nulla, id bibendum libero. Vestibulum dui augue, malesuada nec
              tellus vel, egestas condimentum ipsum. Vestibulum ut.
            </p>
            <p>
              Integer semper quam turpis, id dapibus nunc ultrices at.
              Vestibulum eget orci lobortis, imperdiet diam a, ornare eros. Nam
              porttitor rutrum massa, eu varius velit facilisis at. Quisque
              porta elit et viverra suscipit. Proin laoreet, nisl et auctor
              mollis, felis sapien aliquet felis, nec facilisis tellus enim
              vitae enim. Nam rhoncus enim diam, a consequat nisi bibendum
              pulvinar. Donec aliquam lectus vitae ante pulvinar facilisis.
              Curabitur sed sem est.
            </p>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Blog;
