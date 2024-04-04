import Home from "./Home";

import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div className="font-poppins px-32">
      <Outlet></Outlet>
    </div>
  );
};

export default Root;