import React, { useState } from "react";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = allCategories;

  const filterItems = (category: string) => {
    setActiveCategory(category);
    setMenuItems(
      category === "all"
        ? data
        : data.filter((item) => item.category === category)
    );
  };

  return (
    <div className="h-screen w-screen bg-slate-100 flex  items-center justify-center p-6">
      {/* 篩選按鈕 */}
      <div className="flex space-x-4 mb-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-3 px-5 rounded-lg text-white transition hover:bg-red-700 ${
              activeCategory === category ? "bg-blue-500" : "bg-red-500"
            }`}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        ))}
      </div>
      {/* 卡片列表 (三列) */}
      <div className="grid grid-cols-3 gap-6 w-full max-w-6xl">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md overflow-hidden"
          >
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg">{item.title}</h3>
              <p className="text-gray-600 text-sm">
                {item.desc.substring(0, 100)}...
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
