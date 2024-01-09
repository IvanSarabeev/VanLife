import React from "react";

const Location = () => {
  return (
    <>
      <div className="w-full block mb-4">
        <strong className="regular-16 xl:regular-18 font-semibold text-[#1a3760]">
          Office Location
        </strong>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186125.7800151362!2d27.77809868171308!3d43.2049730885582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40a4538baaf3d7a1%3A0x5727941c71a58b7c!2sVarna!5e0!3m2!1sen!2sbg!4v1701250391520!5m2!1sen!2sbg"
        title="country"
        className="h-56 w-full rounded-lg aspect-square object-cover"
        allowFullScreen={false}
        aria-describedby="Google map"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Location;
