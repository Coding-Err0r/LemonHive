import { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function NavBar() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="w-full z-100">
      <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                alt=""
                src={"/assets/images/logo.png"}
                width={100}
                height={100}
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <Bars3Icon className="h-6 w-6 text-black" />
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-20 md:space-y-0">
              <li className="text-xl font-semibold">
                <a href="#">About us</a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#">What We do</a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#">Our work</a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#">Blog</a>
              </li>
              <li className="text-xl font-semibold">
                <a href="#">Say hi</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          <a href="#" className="px-4 py-2 text-black rounded-md">
            <Bars3Icon className="h-6 w-6 text-black" />
          </a>
        </div>
      </div>
    </nav>
  );
}
