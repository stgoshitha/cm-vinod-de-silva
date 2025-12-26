import { FaTiktok, FaYoutube, FaWhatsapp, FaFacebook } from "react-icons/fa";
import type { IconType } from "react-icons";

export interface SocialLink {
  href: string;
  icon: IconType;
  label: string;
  bgColor: string;
}

const socialLinks: SocialLink[] = [
  {
    href: "https://web.facebook.com/profile.php?id=61574034341066",
    icon: FaFacebook,
    label: "Facebook",
    bgColor: "bg-blue-600",
  },
  {
    href: "http://www.youtube.com/@VinoddeSilva-CombinedMaths",
    icon: FaYoutube,
    label: "YouTube",
    bgColor: "bg-red-600",
  },
  {
    href: "https://www.tiktok.com/@cm_vinod.de.silva?_r=1&_t=ZS-92XTOp0oMCu",
    icon: FaTiktok,
    label: "TikTok",
    bgColor: "bg-black",
  },
  {
    href: "https://wa.me/94772882107",
    icon: FaWhatsapp,
    label: "WhatsApp",
    bgColor: "bg-green-500",
  }
];

export default socialLinks;
