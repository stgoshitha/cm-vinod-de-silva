import React from "react";

interface ProfileHeaderProps {
  name: string;
  role: string;
  profileImg?: string;
  education: string;
}

const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, role, profileImg, education }) => {
  return (
    <div className="flex flex-col items-center px-4">
      {/* Profile Image */}
      {profileImg && (
        <img
          src={profileImg}
          alt={name}
          className="w-32 sm:w-36 md:w-40 lg:w-44 rounded-full mx-auto"
        />
      )}

      {/* Name */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mt-4">
        {name}
      </h1>

      {/* Education */}
      <p className="text-slate-500 text-xs text-center mt-1">
        {education}
      </p>

      {/* Role */}
      <p className="text-slate-300 text-sm sm:text-base mt-1">{role}</p>

    </div>
  );
};

export default ProfileHeader;
