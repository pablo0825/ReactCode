import React, { useState } from "react";

interface CardData {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
  removeTour: (id: number) => void;
}

const Card = ({ id, image, info, name, price, removeTour }: CardData) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <div className="max-w-sm rounded-2xl overflow-hidden shadow-lg bg-white">
      {/* img */}
      <div className="relative">
        <img className="w-full h-64 object-cover" src={image} alt="" />
        <p className="bg-emerald-400 text-white absolute top-0 right-0 px-2 py-1">
          $ {price}
        </p>
      </div>
      {/* illustrate */}
      <div className="p-4 space-y-4">
        <div className="space-y-1">
          {/* text */}
          <h3 className="flex flex-col items-center text-xl font-semibold">
            {name}
          </h3>
          <p className="text-gray-600 mt-2">
            {readMore ? info : `${info.substring(0, 200)}...`}
          </p>
          <button
            className="text-emerald-400 font-bold"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "閱讀更少" : "閱讀更多"}
          </button>
        </div>
        {/* delete */}
        <button
          className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-700 w-full"
          onClick={() => removeTour(id!)}
        >
          刪除
        </button>
      </div>
    </div>
  );
};

export default Card;
