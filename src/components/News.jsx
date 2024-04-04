import { useState } from "react";
import { CiBookmark, CiShare2, CiStar} from "react-icons/ci";
import { FaEye } from "react-icons/fa";

const News = ({news}) => {
  const [read, setRead] =useState(400);
  const handleReadMore =()=>{
    setRead(details.length)
  }
  const {category_id, rating,total_view,author, title, image_url, details} = news
  return (
    <div className="border">
      <div className="py-2 px-4 bg-[#F3F3F3]  flex justify-between items-center">
      <div className="flex items-center gap-3">
      <img className="w-12 h-12 rounded-full" src={author.img} alt="" />
        <div>
          <h2 className="font-semibold text-lg">{author.name? `${author.name}` :'unknown'}</h2>
        <h2>10-08-18</h2>
        </div>
      </div>
      <div className="flex gap-4 text-xl">
      <CiBookmark />
      <CiShare2></CiShare2>
      </div>
      </div>
      <div className="px-3 mt-7">
      <h2 className="font-bold text-xl mb-5" >{title}</h2>
      <img src={image_url} alt="" />
      <p className="mt-8">{details.slice(0,read)}
      <a onClick={handleReadMore} className="text-yellow-300 ml-4 font-bold cursor-pointer">Read More</a></p> <hr />
      <div className="flex items-center justify-between my-4">
        <div className="flex gap-2 items-center">
        <CiStar className="text-yellow-500 text-lg"></CiStar>
         
        </div>
        <div>
        <div className="flex gap-2 items-center">
        <FaEye className="text-yellow-500 text-lg"></FaEye>
        
        </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default News;