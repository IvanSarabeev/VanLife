import React from 'react'
import ImgCircle from "../../../assets/images/people-circle.png";

const Community = () => {
  return (
    <>
        <article className='max-w-2xl'>
          <p className="z-10 regular-16 text-[#FF8C38] -mb-2 uppercase">Join the movement</p>
          <h3 className="text-[40px] lg:text-[64px] heading-attr xl:max-w-[640px]">
            Community over <strong>10,000</strong>
          </h3>
          <p className="regular-16 text-[#1A3760] leading-7 mt-4 indent-1 first-letter:regular-18">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro voluptatibus ducimus quibusdam aliquid cumque aliquam illo, accusantium animi ex. Tenetur quam soluta illum odio vitae, tempora accusamus illo ut maiores.</p>
        </article>
        <div>
            <img src={ImgCircle} alt='community-circle' className='object-cover aspect-square'/>
        </div>
    </>
  )
}

export default Community
