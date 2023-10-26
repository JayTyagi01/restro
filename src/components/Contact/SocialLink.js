import React from "react";

const SocialLink = () => {
  return (
    <div className="flex justify-between items-center gap-3 mb-8 mt-4">
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://www.edigitalagency.com.au/wp-content/uploads/new-Instagram-logo-white-glyph.png"
          width="40px"
          className="transition-transform transform group-hover:scale-110"
          alt="Instagram"
        />
      </a>
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://icon-library.com/images/facebook-icon-transparent-png/facebook-icon-transparent-png-22.jpg"
          width="40px"
          className="transition-transform transform group-hover:scale-110"
          alt="Facebook"
        />
      </a>
      <a href="/" className="text-black underline hover:text-2xl group">
        <img
          src="https://static-00.iconduck.com/assets.00/whatsapp-icon-2045x2048-65qn89dz.png"
          width="40px"
          className="transition-transform transform group-hover:scale-110"
          alt="WhatsApp"
        />
      </a>
    </div>
  );
};

export default SocialLink;
