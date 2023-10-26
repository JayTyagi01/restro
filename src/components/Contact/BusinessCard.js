import React from "react";
import SocialLink from "./SocialLink";
import { Carousel } from "react-responsive-carousel";
import contact1 from "../../assets/img/contact/contact1.webp";
import contact2 from "../../assets/img/contact/contact 2.jpg";
import contact3 from "../../assets/img/contact/contact 3.webp";


function BusinessCard() {
  return (
    <>
      <div className="rounded-lg overflow-hidden border  sm:mt-14 md:mt-20 lg:mt-24 xl:mt-20 mx-4 sm:mx-21 md:mx-15 lg:mx-20 xl:mx-20 bg-white bg-opacity-10">
        <div className="px-6 py-6">
        <Carousel className="rounded-xl  " showIndicators={false} showThumbs={false} showStatus={false} autoPlay={true} infiniteLoop={true} showArrows={false}>
      <div className="relative h-full w-full">
        <img
          src= {contact1}
          alt="1"
          className="h-full w-full object-cover"
        />
       
      </div>
      <div className="relative h-full w-full">
        <img
          src= {contact2}
          alt="2"
          className="h-full w-full object-cover"
        />
        
      </div>
      <div className="relative h-full w-full">
        <img
          src= {contact3}
          alt="3"
          className="h-full w-full object-cover"
        />
      </div>
    </Carousel>
        </div>
        <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"></hr>

        <div className="p-4 mb-2">
          <h5 className="h4  text-white text-center">"Immerse yourself in the grandeur of indian gastronomy and savor a dining experience that mirrors the richness of our heritage."</h5> 
        </div>
        {/* Place Order Button */}
      </div>
    </>
  );
}

export default BusinessCard;
