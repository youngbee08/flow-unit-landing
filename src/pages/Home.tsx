import React from "react";
import { IoIosPlayCircle } from "react-icons/io";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 lg:gap-12">
      <section className="flex flex-col gap-6 items-center justify-center text-center">
        <div className="flex flex-col gap-1 sm:gap-2 lg:gap-4">
          <h2 className="text-2xl sm:text-4xl lg:text-6xl text-primary font-bold">
            Clarity Without the Chaos
          </h2>
          <p className="text-tertiary text-sm lg:text-base font-medium sm:w-[71%] lg:w-[51%] mx-auto">
            Turn project ideas into structured tasks, manually or with AI
            assistance. FlowUnit helps individuals and teams plan, organize,
            assign, and track work in one focused workspace.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className=" px-5 py-3 rounded-xl bg-primary text-white text-sm font-semibold hover:brightness-110 transition cursor-pointer">
            Get Started
          </button>
          <button className=" px-5 py-3 rounded-xl bg-white border border-tertiary/40 text-primary text-sm font-semibold hover:brightness-110 transition cursor-pointer flex items-center gap-1">
            <IoIosPlayCircle />
            Watch Demo
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
