import designImage from "../assets/designer-desk-.png";
import Energy from "../assets/energy-icon.svg";
import range from "../assets/range.svg";
import breakfluid from "../assets/breakfluid.svg";
import TierWear from "../assets/TierWear.svg";

const ads = {
  items: [
    {
      id: "0p0x1",
      title: "Apply for a car loan !",
      text: "This is a sample of a generated text",
      percentage: "4.9",
      btn: "Discover More",
      img: designImage,
      price: "200",
      color: "bg-cash-500",
      shadow: "shadow-lg shadow-blue-500",
    },
  ],
};
const ranges = {
  items: [
    {
      id: "0p0x1",
      title: "Energy",
      text: "MEN Running Shoes",
      percentage: "0.6",
      btn: "Buy Now",
      img: Energy,
      price: "200",
      color: "bg-white",
      shadow: "shadow-lg shadow-blue-500",
      hoverColor: "hover:bg-purple-500",
      trailColor: "bg-purple-200",
    },
    {
      id: "0p0x2",
      title: "Range",
      text: "MEN Running Shoes",
      percentage: "0.2",
      btn: "Buy Now",
      img: range,
      price: "200",
      color: "bg-white",
      shadow: "shadow-lg shadow-rose-500",
      hoverColor: "hover:bg-rose-500",
      trailColor: "bg-purple-200",
    },
    {
      id: "0p0x3",
      title: "Break fluid",
      text: "MEN Running Shoes",
      percentage: "0.1",
      btn: "Buy Now",
      img: breakfluid,
      price: "200",
      color: "bg-white",
      shadow: "shadow-lg shadow-violet-500",
      hoverColor: "hover:bg-purple-500",
      trailColor: "bg-purple-500",
    },
    {
      id: "0p0x4",
      title: "Break fluid",
      text: "MEN Running Shoes",
      percentage: "0.7",
      btn: "Buy Now",
      img: TierWear,
      price: "200",
      color: "bg-white",
      shadow: "shadow-lg shadow-violet-500",
      hoverColor: "hover:bg-orange-300",
      trailColor: "bg-purple-500",
      type: "Manual",
    },
  ],
};

export { ranges, ads };
