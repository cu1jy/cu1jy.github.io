"use client";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Skill from "./components/Skill";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Navbar></Navbar>
      <div className="grid grid-cols-9 gap-4 pt-16 px-14">
        <div className="text-black col-span-4 ml-1 sticky">
          <h1 className="font-semibold text-7xl leading-tight">Hey, I'm <br></br>Allison Cui.</h1>
          <h2 className="font-medium text-xl mt-5">BBA & CSE at University of Michigan</h2>
          <div className="flex items-center space-x-6 mt-5 text-2xl">
            <a href="https://github.com/cu1jy" target="_blank" className="bg-white border border-gray-200 h-14 w-14 rounded-full flex justify-center items-center">
              <BsGithub />
            </a>
            <a href="https://www.linkedin.com/in/cuiallison/" target="_blank" className="bg-white border border-gray-200 h-14 w-14 rounded-full flex justify-center items-center">
              <BsLinkedin />
            </a>
            <a href="https://www.instagram.com/cuiallison/" target="_blank" className="bg-white border border-gray-200 h-14 w-14 rounded-full flex justify-center items-center">
              <BsInstagram />
            </a>
          </div>

        </div>
        <div className="col-span-5 text-gray-400 text-md ml-5 mr-3">
          <p className="mb-7">
            During my freshman year of college, I became more interested in computer science and decided to pursue a second degree. Now, I’m trying to learn as much as I can about technology and how it is used to build and support the world around us. In the future, I hope to work in software engineering or product management, and eventually have my own company.
          </p>
          <p>
            Some things I enjoy outside of learning include listening to music, adding to my Pinterest boards, playing Mahjong with my family, and golfing (I’ve won two state titles!). My other interests include art & design, architecture, and fashion.
          </p>
          <div className="flex items-center my-10 space-x-4">
            <p className="font-medium text-[12px]">PROFESSIONAL EXPERIENCE</p>
            <hr className="h-px rounded bg-gray-300 flex-grow border-none"></hr>
          </div>

          <div className="grid grid-cols-7">
            <p className="col-span-2 text-[12px] font-medium">Jul 2024 — Present</p>
            <div className="col-span-5">
              <p className="font-semibold text-black text-md">Software Engineering Fellow</p>
              <p className="font-medium text-sm">Headstarter AI</p>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                HTML
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                Tailwind
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                JavaScript
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                React
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                Python
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                NextJS
              </div>
            </div>
          </div>
          <div className="grid grid-cols-7 mt-8">
            <p className="col-span-2 text-[12px] font-medium">Mar 2024 — Present</p>
            <div className="col-span-5">
              <p className="font-semibold text-black text-md">Software Research Intern</p>
              <p className="font-medium text-sm">Noah's Arc Capital Management</p>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                HTML
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                CSS
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                JavaScript
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                React
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                Apps Script
              </div>
            </div>
          </div>

          <div className="grid grid-cols-7 mt-8">
            <p className="col-span-2 text-[12px] font-medium">May 2023</p>
            <div className="col-span-5">
              <p className="font-semibold text-black text-md">Cybersecurity Consulting Intern</p>
              <p className="font-medium text-sm">CrystalLine Insurance</p>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                PowerPoint
              </div>
              <div className='mt-1 px-3 py-1 rounded-full inline-block bg-blue-100 text-blue-300 text-sm mr-2'>
                Excel
              </div>
            </div>
          </div>

          <div className="flex items-center mt-10 space-x-4">
            <p className="font-medium text-[12px]">PROJECTS</p>
            <hr className="h-px rounded bg-gray-300 flex-grow border-none"></hr>
          </div>

          <div className="flex items-center justify-center text-sm my-10">
            Nothing yet. Come back later to see what I'm working on!
          </div>
        </div>
      </div>

    </main>
  );
}
