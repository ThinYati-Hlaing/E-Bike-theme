import React from "react";
import { Link } from "react-scroll";

const Home = () => {
    return (
        <div id="home" className=" w-screen h-screen pt-20">
            <div className=" flex container h-full mx-auto justify-center gap-5">
                <div className=" flex bg-white w-[700px] item-center px-15">
                    <img className=" lg:h-screen lg:pb-14 shadow-slate-400" src="/ebike.jpg" alt="e-bike" />
                </div>
                <div className="mt-32 p-4">
                    <h1 className=" text-slate-700 text-4xl font-bold tracking-widest">
                        Drive Best Bikes <br /> With Style
                    </h1>
                    <p className=" text-slate-400 lg:text-center py-6 tracking-wide">
                        Explore premium bikes for all terrains, Shop now, ride towards a
                        healthier lifestyle!
                    </p>
                    <Link to="project">
                        <button className=" text-white bg-slate-700 flex justify-center lg:items-center p-3 rounded-xl hover:bg-slate-600 select-none">Explore Now</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
