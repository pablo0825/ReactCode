import React, { useEffect, useState } from "react";
import axios from "axios";
import BtnContainer from "./BtnContainer";

const url = "https://www.course-api.com/react-tabs-project";

interface TabsDats {
  id: number;
  company: string;
  title: string;
  dates: string;
  duties: string[];
}

const Tabs = () => {
  const [tabsData, setTabsData] = useState<TabsDats[]>([]); // ✅ 修正命名
  const [currentItem, setCurrentItem] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchJobs = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get<TabsDats[]>(url);
      console.log(data);
      setTabsData(data);
    } catch (error) {
      console.error("載入資料失敗:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchJobs(url);
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div className="flex flex-row max-w-7xl gap-12">
        {/* 左側按鈕 */}
        <BtnContainer
          tabsData={tabsData}
          currentItem={currentItem}
          setCurrentItem={setCurrentItem}
        />

        {/* 右側內容 */}
        <div className="flex-1 h-72 bg-emerald-400 space-y-4">
          {loading ? (
            <p>載入中...</p>
          ) : (
            tabsData.length > 0 && (
              <>
                {/* 頂部 */}
                <div>
                  <h1>{tabsData[currentItem]?.title}</h1>
                  <p>{tabsData[currentItem]?.company}</p>
                  <p>{tabsData[currentItem]?.dates}</p>
                </div>
                {/* 工作內容 */}
                <div>
                  {tabsData[currentItem].duties.map((duty, idx) => (
                    <p key={idx} className="flex flex-col">
                      {duty}
                    </p>
                  ))}
                </div>
              </>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
