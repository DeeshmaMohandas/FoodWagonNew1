import { useState } from "react";
import ToggleButton from "./ToggleButton";
import noodles from "../assets/noodles.png"; // Add image to assets folder

const Hero = () => {
  const [mode, setMode] = useState("Delivery");
  const [address, setAddress] = useState("");

  return (
    <section className="bg-gradient-to-r from-yellow-300 to-orange-400 p-8 flex flex-col md:flex-row items-center justify-between gap-8">
      <div className="flex-1">
        <h2 className="text-4xl font-bold text-white mb-2">Are you starving?</h2>
        <p className="text-white mb-6">Within a few clicks, find meals near you</p>
        <ToggleButton selected={mode} setSelected={setMode} />
        <div className="bg-white p-2 rounded-full flex shadow w-full max-w-md mx-auto">
          <input
            className="flex-grow px-4 py-2 rounded-l-full outline-none"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full">
            🔍 Find Food
          </button>
        </div>
      </div>
      <img src={noodles} alt="noodles" className="w-72 rounded-full shadow-xl" />
    </section>
  );
};

export default Hero;
