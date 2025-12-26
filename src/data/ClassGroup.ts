import {FaWhatsapp} from "react-icons/fa";
// import { SiTelegram } from "react-icons/si";
import type { IconType } from "react-icons";

export interface ClassGroup {
  href: string;
  icon: IconType;
  label: string;
  bgColor: string;
}

const classGroups: ClassGroup[] = [

  //whatsapp groups
  {
    href: "https://chat.whatsapp.com/ESpCMxg4onv3BUoMfJ8iO1",
    icon: FaWhatsapp,
    label: "WhatsApp Gorup - 2026 Revision / Theory",
    bgColor: "bg-green-500",
  },

  //telegram groups
  // {
  //   href: "https://chat.whatsapp.com/ESpCMxg4onv3BUoMfJ8iO1",
  //   icon: SiTelegram,
  //   label: "Telegram Gorup - 2026 Revision / Theory",
  //   bgColor: "bg-blue-400",
  // }

];

export default classGroups;
