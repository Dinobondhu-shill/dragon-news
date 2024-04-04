import moment from "moment";
import logo from "../../public/logo.png"
import HotNews from "./HotNews";
const Header = () => {
  return (
    <div className="py-8 mx-auto text-center">
      <img className="mx-auto" src={logo} alt="" />
      <p className="pt-5 pb-3 text-lg text-[#706F6F] font-normal">Journalism Without Fear or Favour</p>
      <p className="font-medium text-xl">{
        moment().format('dddd, MMMM D, YYYY')
        }
        </p>
        <HotNews></HotNews>
    </div>
  );
};

export default Header;