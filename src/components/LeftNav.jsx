import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftNav = () => {
  const [categories, setCategory] = useState([]);
  useEffect(()=>{
    fetch('/categories.json')
    .then(res=> res.json())
    .then(data=> setCategory(data))
  },[])
  return (
    <div>
      <h3 className="font-bold text-xl mb-4">All Categories</h3>
      <div  className="flex flex-col px-4 font-normal text-lg gap-4 mb-5">
    {
      categories.map(category=> <NavLink id="leftnav" to={`./categories/${category.id}`} key={category.id} category={category}>{category.name}</NavLink>)
    }
      </div>
    </div>
  );
};

export default LeftNav;