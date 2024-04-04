import { Link, NavLink } from "react-router-dom";
import user from "../../public/user.png"

const Navbar = () => {
  const Navlink = <>
  <NavLink>Home</NavLink>
  <NavLink>About</NavLink>
  <NavLink>Career</NavLink>
  </>
  return (
    <div className="navbar bg-base-100 mb-6">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {
          Navlink
        }
      </ul>
    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 flex gap-5 font-normal text-lg">
    {
          Navlink
        }
    </ul>
  </div>
  <div className="navbar-end flex gap-4">
    <Link className="w-12 h-12 "><img src={user} alt="" /></Link>
   <Link className="bg-black py-2 px-6 text-white font-semibold text-xl rounded-sm">Login</Link>
  </div>
</div>
  );
};

export default Navbar;