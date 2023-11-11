import React from "react";
import ImgReviews from "../../../assets/images/reviews.png";
import { ReactComponent as IconStar } from "../../../assets/svgs/star.svg";

const reviewsData = [
  {
    rating: 5,
    name: "Elliot",
    date: "January 3, 2023",
    text: "The beach bum is such an awesome van! Such a comfortable trip. We had it for 2 weeks and there was not a single issue. Super clean when we picked it up and the host is very comfortable and understanding. Highly recommend!",
  },
  {
    rating: 5,
    name: "Sandy",
    date: "December 12, 2022",
    text: "This is our third time using the Modest Explorer for our travels and we love it! No complaints, absolutely perfect!",
  },
];

const Reviews = () => {
  return (
    <>
      <span className="inline-flex space-x-4 items-center justify-start text-center">
        <h3 className="text-3xl font-bold leading-8 text-custom-black">
          Your reviews
        </h3>
        <p className="inline-flex gap-x-1 items-center text-base leading-6 font-medium text-[#4D4D4D]">
          last <strong className="underline font-bold text-xl">30 days</strong>
        </p>
      </span>
      <section className="flex flex-col px-2.5">
        <img
          src={ImgReviews}
          alt="reviews"
          className="w-96 h-72 lg:w-[500px] lg:h-auto aspect-square object-contain"
        />
        <h4 className="text-lg font-bold leading-6 text-custom-black mb-2">
          Reviews (2)
        </h4>
        {reviewsData.map((item, index) => {
          return (
            <div className="space-y-4 mb-8 text-custom-black" key={index}>
              <div className="flex">
                {[...Array(item.rating)].map((_, index) => (
                  <IconStar
                    key={index}
                    className="h-4 w-4 mr-1 fill-[#ff8c38] my-1"
                  />
                ))}
              </div>
              <div className="flex">
                <p className="font-semibold text-custom-black mr-1">
                  {item.name} /
                </p>
                <p className="text-[#8c8c8c]">{item.date}</p>
              </div>
              <p>{item.text}</p>
              <hr className="h-1 border-none bg-[#c7c7c7]" />
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Reviews;
