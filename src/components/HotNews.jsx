import Marquee from "react-fast-marquee";

const HotNews = () => {
  return (
    <div className="flex items-center gap-4 bg-[#F3F3F3] py-3 px-2 rounded-md mt-6 mb-3">
      <div className="btn btn-info">Latest</div>
      <div className="font-semibold text-lg">
      <Marquee>
  I can be a React component, multiple React components, or just some text.
</Marquee>
      </div>
    </div>
  );
};

export default HotNews;