import React from "react";
import axios from "axios";

const url = "https://www.course-api.com/react-tabs-project";

const Tabs = () => {
  const fetchJobs = async (url: string) => {
    try {
      const { data } = await axios.get(url);

      console.log(data);
    } catch (error) {
      console.error("載入旅遊資料失敗:", error);
    }
  };

  return (
    <div>
      <button onClick={() => fetchJobs(url)} className="bg-slate-500">
        按我
      </button>
    </div>
  );
};

export default Tabs;
