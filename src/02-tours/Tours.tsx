import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from "./Card";

interface ToursData {
  id: number;
  image: string;
  info: string;
  name: string;
  price: number;
}

const Tours = () => {
  const [toursData, setToursData] = useState<ToursData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const url = "https://www.course-api.com/react-tours-project";

  const removeTour = (id: number) => {
    setToursData((prevTours) => prevTours.filter((td) => td.id !== id));
  };

  const search = async (url: string) => {
    setLoading(true);
    try {
      const { data } = await axios.get(url);
      setToursData(data);
    } catch (error) {
      console.error("載入旅遊資料失敗:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    search(url);
  }, []);

  return (
    <div className="h-screen w-screen bg-slate-100 flex items-center justify-center">
      <div>
        <div className="flex flex-wrap justify-center gap-6">
          {loading ? (
            <p>載入中...</p>
          ) : toursData.length === 0 ? (
            <button
              onClick={() => search(url)}
              className="bg-emerald-400 text-white p-4 rounded-lg"
            >
              重新生成
            </button>
          ) : (
            toursData.map((d) => (
              <Card
                key={d.id}
                id={d.id}
                image={d.image}
                info={d.info}
                name={d.name}
                price={d.price}
                removeTour={() => removeTour(d.id)}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Tours;
