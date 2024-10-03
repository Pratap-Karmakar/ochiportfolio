import React from "react";

const Footer = () => {
  return (
    <div className="text-[#FEFAE0] w-full h-screen bg-zinc-900">
      <div className="px-20 pt-28 flex gap-5 ">
        <div className="w-1/2 h-full flex flex-col justify-between">
          <div className="heading">
            <h1 className="text-9xl">About.</h1>
            <p className="w-[350px]">
              NAIYO24 PRIVATE LIMITED specializes in crafting innovative web and
              mobile solutions tailored to your business. We're committed to
              turning your digital ideas into reality with cutting-edge
              technology and expert services.
            </p>
          </div>
          <div className="mt-[50vh] font-semibold">Naiyo24.</div>
        </div>
        <div className="w-1/2">
        <div className="text-5xl">
            Quick Links.
        </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
