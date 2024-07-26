import React from "react";

const About = () => {
  return (
    <div id="about" className="  w-full h-screen pt-20 px-16">
      <div className=" container mx-auto py-10">
        <h1 className=" text-2xl font-semibold tracking-wide">
          What Is an Electric Bike?
        </h1>
        <div>
          <p className=" py-5">
          Electric bikes, also known as e-bikes, are motor-assisted and look similar to conventional bicycles.

With a rechargeable battery and a motor to provide support when pedalling, electric bikes enable riders to travel faster than a traditional pedal bike without the same level of physical exertion.          </p>
        </div>
        <div className="w-[80%] h-full flex rounded-md  bg-gray-500 px-5 py-5 justify-center items-center mx-auto">
          <img
            className=" w-[50%] h-[350px] mx-auto rounded-s-md"
            src="/Gear.png.webp"
            alt=""
          />
          <div className=" bg-blue-500 w-[60%] h-[350px] justify-center items-center align-middle rounded-e-md py-10">
            <h2 className=" text-2xl font-medium py-3 justify-center items-center">
              What Is an Electric Bike?
            </h2>
            <p className=" flex-wrap lg:text-xl text-slate-900 font-thin py-2 justify-center items-center">
              E-bikes are like traditional bikes except they feature <br />
              <strong className=" font-mono">
                a compact electric motor to provide a power boost
              </strong>{" "}
              for climbing hills or travelling long distances.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
