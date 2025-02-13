import React from "react";

interface CardPerson {
  id: number;
  name: string;
  job: string;
  image: string;
  text: string;
  nextPorson: () => void;
  prevPerson: () => void;
  randomPerson: () => void;
}

const Card = ({
  name,
  job,
  image,
  text,
  nextPorson,
  prevPerson,
  randomPerson,
}: CardPerson) => {
  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      <div className="flex flex-col items-center justify-center p-6 space-y-2">
        <img
          src={image}
          alt={name}
          className="h-36 w-36 object-cover rounded-full"
        />
        <p className="text-2xl">{name}</p>
        <p className="text-xs">{job}</p>
        <p className="text-sm text-slate-800">{text}</p>
        <div className="space-x-4">
          <button className="bg-yellow-400" onClick={prevPerson}>
            上一個
          </button>
          <button className="bg-yellow-400" onClick={nextPorson}>
            下一個
          </button>
        </div>
        <button className="bg-yellow-400" onClick={randomPerson}>
          隨機
        </button>
      </div>
    </div>
  );
};

export default Card;
