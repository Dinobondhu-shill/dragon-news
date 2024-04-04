import { useEffect, useState } from "react";
import News from "./News";


const NewsContainer = () => {
  const [newses, setNews] = useState([]);
  const [showAll , setShowAll] = useState(5)

  const handleShowAll = ()=>{
    setShowAll(newses.length)
  }

  useEffect(()=>{
    fetch('/news.json')
    .then(res=> res.json())
    .then(data => setNews(data))
  },[])
  return (
    <div className="space-y-4 mb-4">
      <h3 className="font-bold text-xl mb-4">Dragon News Home</h3>
      {
        newses.slice(0,showAll).map(news=> <News key={news.category_id} news={news}></News>)
      }
      {
        showAll !== newses.length && <button onClick={handleShowAll} className="btn btn-success">Show All</button>
      }
    </div>
  );
};

export default NewsContainer;