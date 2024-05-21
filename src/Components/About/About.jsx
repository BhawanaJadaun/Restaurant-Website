import React from "react";
import BgPolygon from "../../assets/polygon.png";
import vector from "../../assets/vector-wave.png";
import { FaUser } from "react-icons/fa";
const BgStyle = {
  backgroundImage: `url(${BgPolygon})`,
  backgroundRepeat: "no-repeat",
  backgroundPosition: "center",
  backgroundSize: "cover",
  width: "100%",
  height: "100%",
  position: "relative",
};
const About = ({HandlePopup}) => {
  return (
    <div style={BgStyle} className="py-14">
      <div className="container min-h-[500px] relative z-10">
        <h1 data-aos = "fade" className="pt-20 tracking-wider text-4xl font-semibold text-white text-center">
          About Us
        </h1>
        {/* Card Section */}
        <div data-aos = "fade"
        data-aos-delay = "300" className="bg-white/80 py-10 my-10">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
          <div className="pt-10 flex justify-center">
            <button onClick={HandlePopup}
              className="flex justify-center items-center gap-2
 bg-primary text-xl h-[40px] text-white px-5 py-2 hover:scale-105 duration -300"
            >
              <FaUser />
              My Account
            </button>
          </div>
        </div>
      </div>
      {/* Solve Vector */}
      <div className="absolute top-0 right:0 w-full">
        <img src={vector} alt="" className="mx-auto" />
      </div>
    </div>
  );
};

export default About;
