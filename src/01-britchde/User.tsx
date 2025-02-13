import React from "react";

interface UserPropes {
  id?: number;
  name: string;
  age: number;
  image: string;
}

export const User = ({ name, age, image }: UserPropes) => {
  return (
    <div className="flex flex-row space-x-4 mb-6 w-96">
      <img
        src={image}
        alt={name}
        className="h-[4.7rem] w-[4.7rem] rounded-full object-cover"
      />
      <div className="flex  flex-col justify-center">
        <h2 className="text-2xl font-bold mb-2">{name}</h2>
        <p className="text-zinc-400">{age} years</p>
      </div>
    </div>
  );
};
