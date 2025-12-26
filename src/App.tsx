import React from "react";
import socialLinks from "./data/socialLinks";
import classGroups from "./data/ClassGroup";
import updatedText from "./data/updatedTexts";
import SocialButton from "./components/SocialButton";
import ProfileHeader from "./components/ProfileHeader";
import ProfileFooter from "./components/ProfileFooter";
import ClassGroup from "./components/ClassGroup";

export interface SocialLink {
  href: string;
  icon: React.ElementType;
  label: string;
  bgColor: string;
}

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-900 flex items-center justify-center px-4 py-6">
      <div className="w-full max-w-md text-center space-y-6 sm:max-w-lg md:max-w-xl lg:max-w-2xl">

        {/* Profile Header */}
        <ProfileHeader
          name={updatedText.name}
          role={updatedText.role}
          profileImg={updatedText.profileImg}
          education={updatedText.education}
        />

        {/* Divider */}
        <hr className="border-slate-700 my-4" />

        {/* Social Links */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mb-2">
          Social Links
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:w-3/4 mx-auto">
          {socialLinks.map((link, idx) => (
            <SocialButton
              key={idx}
              href={link.href}
              icon={link.icon}
              label={link.label}
              bgColor={link.bgColor}
            />
          ))}
        </div>

        {/* Class Group Links */}
        <h2 className="text-white text-lg sm:text-xl md:text-2xl font-semibold mt-6 mb-2">
          Class Group Links
        </h2>
        <div className="grid grid-cols-1 gap-4 sm:w-3/4 mx-auto">
          {classGroups.map((link, idx) => (
            <ClassGroup
              key={idx}
              href={link.href}
              icon={link.icon}
              label={link.label}
              bgColor={link.bgColor}
            />
          ))}
        </div>

        {/* Profile Footer */}
        <ProfileFooter tagline={updatedText.tagline} />

      </div>
    </div>
  );
};

export default App;
