import React from "react";

const Featured = () => {
  return (
    <div className="bg-zinc-900 w-full py-20 text-[#F9EFDB]">
      <div className="w-full px-20 border-b-[1px] pb-20">
        <h1 className="xl:text-8xl md:text-7xl sm:text-4xl">
          Featured Projects.
        </h1>
      </div>
      <div>
        <div className="cards w-full flex flex-col md:flex-row gap-10 mt-10 px-20">
          {/* First Card */}
          <div className="cardcontainer relative w-full md:w-1/2 h-[60vh]">
            <h1 className="absolute left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-6xl font-bold text-[#9DBC98]">
              {'Flowers'.split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19298281/pexels-photo-19298281/free-photo-of-woman-holding-a-bunch-of-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-full object-cover"
                alt="flowers"
              />
            </div>
          </div>

          {/* Second Card */}
          <div className="cardcontainer relative w-full md:w-1/2 h-[60vh]">
            <h1 className="absolute right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-50 text-6xl font-bold text-[#9DBC98]">
              {'Nature'.split('').map((item, index) => (
                <span key={index}>{item}</span>
              ))}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://images.pexels.com/photos/19298281/pexels-photo-19298281/free-photo-of-woman-holding-a-bunch-of-sunflowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="w-full h-full object-cover"
                alt="nature"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
