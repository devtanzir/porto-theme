import { FaRegCircleDot, FaWhatsapp } from "react-icons/fa6";
import { createId } from "../utils/idGenerator";
import { MdOutlineEmail } from "react-icons/md";

export const FAQS = [
  {
    id: createId(),
    title: "Technical support contacts?",
    path: "#",
  },
  {
    id: createId(),
    title: "How do I know the date of my delivery?",
    path: "#",
  },
  {
    id: createId(),
    title: "My product did not arrive?",
    path: "#",
  },
  {
    id: createId(),
    title: "What are the payment methods?",
    path: "#",
  },
  {
    id: createId(),
    title: "Product availability?",
    path: "#",
  },
];

export const Contact = [
  {
    id: createId(),
    title: "234 Street Name, City Name",
    path: "#",
    icon: <FaRegCircleDot />,
  },
  {
    id: createId(),
    title: "(800) 123-4567",
    path: "tel:12345678910",
    icon: <FaWhatsapp />,
  },
  {
    id: createId(),
    title: "mail@example.com",
    path: "mailto:info@example.com",
    icon: <MdOutlineEmail />,
  },
];
