"use client";
import { useState } from "react";
import Image from "next/image";

export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const elements = [
    
    { name: "NEWS", link: "/news" },
    
    { name: "TALK TO US", link: "/contact" },
  ];

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 p-3 shadow-md backdrop-blur-md">
        <div className="flex items-center justify-between  mx-auto">
          <div className="flex items-center">
            <Image src="/logo.png" width={80} height={80} alt="logo" priority />
          </div>

          <button
            className="p-2 md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <div
            className={`${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:items-center  flex-col md:flex-row absolute md:relative top-full left-0 w-full md:w-auto border md:border-0  border-gray-500 rounded-md md:backdrop-filter md:backdrop-blur-md`}
            // Adjust the RGB values and opacity as needed
          >
            {elements.map((element, index) => (
              <a
                key={index}
                href={element.link}
                className={`px-5 py-3 font-semibold text-lg  text-black transition duration-300 ease-in-out transform hover:bg-gray-200 hover:bg-opacity-70 text-center block whitespace-nowrap ${
                  isMenuOpen
                    ? "bg-gray-200 bg-opacity-50 hover:bg-green-200"
                    : "md:border-2 rounded-full border-grey-500 hover:border-grey-600 hover:scale-110 "
                } md:mx-1`}
              >
                {element.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <style jsx>{`
        .hamburger {
          display: inline-block;
          cursor: pointer;
        }

        .hamburger span {
          display: block;
          width: 30px;
          height: 3px;
          margin-bottom: 5px;
          position: relative;
          background: #ffffff;
          border-radius: 3px;
          z-index: 1;
          transition: transform 0.25s ease-in-out, background 0.25s ease-in-out,
            opacity 0.25s ease;
        }

        .hamburger.open span:nth-child(1) {
          transform: translateY(8px) rotate(45deg);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .hamburger.open span:nth-child(3) {
          transform: translateY(-8px) rotate(-45deg);
        }
      `}</style>
    </div>
  );
}
