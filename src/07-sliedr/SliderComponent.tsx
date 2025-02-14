import React from "react";
import Slider from "react-slick";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data"; // 確保 data 存在

const SliderComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="">
      <div className="">
        <Slider {...settings}>
          {data?.length > 0 &&
            data.map((pve) => (
              <article key={pve.id} className="">
                <img src={pve.image} alt={pve.name} className="" />
                <h5 className="">{pve.name}</h5>
                <p className="text-gray-600">{pve.title}</p>
                <p className="text-sm text-gray-700 italic">{pve.quote}</p>
                <FaQuoteRight className="text-teal-500 text-3xl mx-auto mt-4" />
              </article>
            ))}
        </Slider>
      </div>
    </div>
  );
};

export default SliderComponent;
