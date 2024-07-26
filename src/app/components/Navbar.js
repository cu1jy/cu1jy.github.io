"use client";
import React, { useState, useEffect } from "react";
import { PiSun } from "react-icons/pi";

const Navbar = () => {
    const [time, setTime] = useState("");

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const timeOptions = { hour: "2-digit", minute: "2-digit", hour12: false };
            const formattedTime = now.toLocaleTimeString("en-US", {
                timeZone: "America/Detroit",
                ...timeOptions,
            });
            setTime(formattedTime);
        };

        const intervalId = setInterval(updateTime, 1000);
        updateTime();

        return () => clearInterval(intervalId); //cleans up interval on component
    });

    return (
        <>
            <nav className="flex items-center justify-between mx-10 pt-7 sticky">
                <div className="h-12 flex items-center justify-center px-7 border border-gray-200 space-x-10 rounded-full text-black bg-white text-sm font-medium shadow-[0_5px_20px_0_rgba(86,86,86,0.05)]">
                    <a href='/' className="inline">Home</a>
                    <a href='/projects' className="inline">Projects</a>
                    <a href='https://drive.google.com/file/d/1d97EUvBlempp2REoFj6bywMn92GeHruq/view?usp=sharing' target="_blank" className="inline">Resume</a>
                    <a href='mailto:cuijy@umich.edu' className="inline">Contact</a>
                </div>

                <div className="flex space-x-2">
                    <div className="h-12 flex items-center justify-center space-x-5 px-5 border border-gray-200 rounded-full text-black bg-white text-sm font-medium shadow-[0_5px_20px_0_rgba(86,86,86,0.05)]">
                        <p className="inline">Ann Arbor, MI</p>
                        <p className="ml-2 inline" id="time">{time}</p>
                    </div>
                    <button className="h-12 w-14 flex items-center justify-center border border-gray-200 rounded-full bg-white shadow-[0_5px_20px_0_rgba(86,86,86,0.05)]">
                        <PiSun className="text-xl text-blue-800"></PiSun>
                    </button>
                </div>
            </nav>
        </>
    )
}

export default Navbar
