import React from "react";

interface ProfileFooterProps {
  tagline?: string;
}

const ProfileFooter: React.FC<ProfileFooterProps> = ({ tagline }) => {
  return (
    <div className="mt-6">
      {tagline && (
        <p className="text-slate-400 text-xs sm:text-sm text-center">
          {tagline}
        </p>
      )}
      <p className="text-slate-500 text-xs text-center mt-1">
        © {new Date().getFullYear()} Vinod De Silva. All rights reserved.
      </p>
    </div>
  );
};

export default ProfileFooter;
