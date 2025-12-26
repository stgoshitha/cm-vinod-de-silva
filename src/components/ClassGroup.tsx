import React from "react";

interface ClassGroupProps {
  href: string;
  icon: React.ElementType;
  label: string;
  bgColor: string;
}

const ClassGroup: React.FC<ClassGroupProps> = ({ href, icon: Icon, label, bgColor }) => {
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

export default ClassGroup;
