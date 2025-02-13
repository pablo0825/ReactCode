import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

interface QuestionPerson {
  id: number;
  title: string;
  info: string;
  activeId: number | string | null;
  toggleQustion: (id: number) => void;
}

const Question = ({
  id,
  title,
  info,
  activeId,
  toggleQustion,
}: QuestionPerson) => {
  return (
    <div
      className="space-x-4 mb-2 border-b p-4 bg-emerald-400"
      onClick={() => toggleQustion(id)}
    >
      <div className="flex">
        <p className="font-bold grow">{title}</p>
        <button>
          {activeId === id ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </div>
      <div className="mt-2">{activeId === id && <p>{info}</p>}</div>
    </div>
  );
};

export default Question;
