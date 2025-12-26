import React from "react";

interface SocialButtonProps {
  href: string;
  icon: React.ElementType;
  label: string;
  bgColor: string;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, icon: Icon, label, bgColor }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`
        flex items-center justify-center gap-2
        ${bgColor} text-white py-3 px-4 sm:px-6
        rounded-xl font-semibold
        hover:scale-105 hover:shadow-lg transition
        text-sm sm:text-base
      `}
    >
      <Icon size={20} className="sm:text-xl" />
      <span className="truncate">{label}</span>
    </a>
  );
};

export default SocialButton;
