import { useEffect, useState } from "react";
import News from "./News";


const NewsContainer = () => {
  const [newses, setNews] = useState([]);

  useEffect(()=>{
    fetch('/news.json')
    .then(res=> res.json())
    .then(data => setNews(data))
  },[])
  return (
    <div className="space-y-4">
      <h3 className="font-bold text-xl mb-4">Dragon News Home</h3>
      {
        newses.map(news=> <News key={news.category_id} news={news}></News>)
      }
    </div>
  );
};

export default NewsContainer;