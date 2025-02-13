import React, { useState } from "react";
import data from "./data";
import Card from "./Card";

const Reviews = () => {
  const [index, setIndex] = useState(0);
  const { id, name, job, image, text } = data[index];

  /* 下一位 */
  const nextPorson = () => {
    setIndex((index) => {
      const newValue = (index + 1) % data.length;
      console.log(newValue);

      return newValue;
    });
  };

  /* 上一位 */
  const prevPerson = () => {
    setIndex((index) => {
      const newValue = (index - 1 + data.length) % data.length;
      console.log(newValue);

      return newValue;
    });
  };

  /* 隨機 */
  const randomPerson = () => {
    /* floor 取整數 */
    let randomNumber = Math.floor(Math.random() * data.length);

    if (randomNumber === index) {
      randomNumber = index + 1;
    }

    const nweIndex = randomNumber % data.length;
    console.log(nweIndex);

    setIndex(nweIndex);
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
      <Card
        id={id}
        name={name}
        job={job}
        image={image}
        text={text}
        nextPorson={nextPorson}
        prevPerson={prevPerson}
        randomPerson={randomPerson}
      />
    </div>
  );
};

export default Reviews;
