import React from "react";

interface TabsDats {
  id: number;
  company: string;
  title: string;
  dates: string;
  duties: string[];
}

interface BtnContainerPerson {
  tabsData: TabsDats[];
  currentItem: number;
  setCurrentItem: (idx: number) => void;
}

const BtnContainer = ({
  tabsData,
  currentItem,
  setCurrentItem,
}: BtnContainerPerson) => {
  return (
    <div className="flex-none flex flex-col space-y-4 bg-fuchsia-200 w-32">
      {tabsData.map((items, idx) => {
        return (
          <>
            <button
              key={items.id}
              onClick={() => setCurrentItem(idx)}
              className={`text-black py-2 px-4 ${
                currentItem === idx &&
                "text-emerald-500 border-l-4 border-emerald-500 font-bold"
              }`}
            >
              {items.company}
            </button>
          </>
        );
      })}
    </div>
  );
};

export default BtnContainer;
