import React, { useEffect, useRef, useState, useCallback } from "react";
import data from "./data";
import Question from "./Question";

const Accordion = () => {
  const [activeId, setActiveId] = useState<number | string | null>(null);
  const accordionRef = useRef<HTMLDivElement>(null);

  const toggleQustion = (id: number | string) => {
    const newActiveId = id === activeId ? null : id;
    console.log(newActiveId);

    setActiveId(newActiveId);
  };

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (
      accordionRef.current &&
      !accordionRef.current.contains(e.target as Node)
    ) {
      setActiveId(null);
    }
  }, []);

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div
        className="w-1/2 bg-white p-6 shadow-lg space-y-4"
        ref={accordionRef}
      >
        <div className="items-center justify-center flex">
          <h1 className="text-3xl">Questions</h1>
        </div>
        {data.map((item) => {
          return (
            <Question
              key={item.id}
              id={item.id}
              title={item.title}
              info={item.info}
              activeId={activeId}
              toggleQustion={toggleQustion}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
