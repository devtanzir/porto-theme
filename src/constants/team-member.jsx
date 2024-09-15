import { GoDeviceMobile, GoSearch } from "react-icons/go";
import { createId } from "../utils/idGenerator";
import { SlLayers } from "react-icons/sl";
import { AiOutlineDesktop } from "react-icons/ai";
import { TfiFacebook } from "react-icons/tfi";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

export const teamMember = [
  {
    id: createId(),
    name: "John Doe",
    role: "Leader",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-1-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Jessica Doe",
    role: "Marketing Manager",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-2-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Rick Edward Doe",
    role: "web developer",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-3-1-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Melinda Wolosky",
    role: "web designer",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-4-1-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Robert Doe",
    role: "app developer",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-5-1-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Melissa Doe",
    role: "Marketing Manager",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-6-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Will Doe",
    role: "web developer",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-7-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
  {
    id: createId(),
    name: "Jerry Doe",
    role: "web designer",
    image:
      "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/team-8-640x640.jpg",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vehiculaÂ sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam. Donec ante risus, dapibus sed lectus non, lacinia vestibulum nisi. Morbi vitae augue quam. Nullam ac laoreet libero.",
    para: "Consectetur adipiscing elit. Aliquam iaculis sit amet enim ac sagittis. Curabitur eget leo varius, elementum mauris eget, egestas quam.",
    socialLinks: [
      {
        id: createId(),
        name: "Facebook",
        link: "https://www.facebook.com",
        bgColor: "#4E6AA4",
        icon: <TfiFacebook />,
      },
      {
        id: createId(),
        name: "Twitter",
        link: "https://www.x.com",
        bgColor: "#000",
        icon: <RiTwitterXLine />,
      },
      {
        id: createId(),
        name: "LinkedIn",
        link: "https://www.linkedin.com",
        bgColor: "#1981BA",
        icon: <FaLinkedinIn />,
      },
    ],
    skills: [
      {
        id: createId(),
        name: "Mobile Apps",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoDeviceMobile />,
      },
      {
        id: createId(),
        name: "Creative Websites",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <SlLayers />,
      },
      {
        id: createId(),
        name: "SEO Optimization",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <GoSearch />,
      },
      {
        id: createId(),
        name: "Brand Solutions",
        description: "Lorem ipsum dolor sit amet, coctetur adipiscing elit.",
        icon: <AiOutlineDesktop />,
      },
    ],
    work: [
      {
        id: createId(),
        name: "small slider",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-5-640x640.jpg",
      },
      {
        id: createId(),
        name: "large slider",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-7-367x367.jpg",
      },
      {
        id: createId(),
        name: "video",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-6-367x367.jpg",
      },
      {
        id: createId(),
        name: "medias",
        category: "medias",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-4-367x367.jpg",
      },
      {
        id: createId(),
        name: "masonry images",
        category: "design",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-masonry-367x367.jpg",
      },
      {
        id: createId(),
        name: "sticky content",
        category: "brand",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/06/project-1-short-367x367.jpg",
      },
      {
        id: createId(),
        name: "porto branding",
        category: "website",
        image:
          "https://www.portotheme.com/wordpress/porto/classic-original/wp-content/uploads/sites/2/2016/01/project-full-width-367x367.jpg",
      },
    ],
  },
];
