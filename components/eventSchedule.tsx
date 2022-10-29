import React from "react";
import Link from "next/link";

const EventSchedule = () => {
  return (
    <section className="relative lg:mb-24 mb-12" id="scheduler">
      <div className="container mx-auto mt-96">
        <div className="wrapper bg-white rounded shadow w-full ">
          <div className="header flex flex-col justify-between border-b lg:p-2 lg:px-4 px-6">
            <h1 className="text-6xl font-semibold -ml-2">Event Schedule</h1>
            <p className="py-6 text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex
              suscipit iste ut eos.
            </p>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th className="p-2 border h-10  xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold xl:h-24">
                    <span className="xl:block lg:block md:block sm:block hidden"></span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block"></span>
                  </th>
                  <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Tue
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Tue
                    </span>
                  </th>
                  <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Wed
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Wed
                    </span>
                  </th>
                  <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Thu
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Thu
                    </span>
                  </th>
                  <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Fri
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Fri
                    </span>
                  </th>
                  <th className="p-2  h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Sat
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sat
                    </span>
                  </th>
                  <th className="p-2 border-r h-10 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-3xl text-xs font-semibold">
                    <span className="xl:block lg:block md:block sm:block hidden">
                      Sun
                    </span>
                    <span className="xl:hidden lg:hidden md:hidden sm:hidden block">
                      Sun
                    </span>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center h-20">
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease  ">
                    <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden items-center justify-center">
                      <div className="top h-5 w-full">
                        <h2 className="text-black lg:text-2xl font-bold text-sm">
                          09.00
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-1 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-12 mx-auto overflow-hidden">
                      <div className="top h-5 w-full lg:mt-2">
                        <span className="text-black font-bold text-xs lg:text-base">
                          02 - 08 - 2022
                        </span>
                      </div>
                      <Link
                        href="2"
                        className="border lg:border-2 border-yellow-300 rounded-xl lg:mt-10 mt-10 hover:bg-yellow-100"
                      >
                        <p className="text-yellow-700 font-bold lg:text-lg lg:p-4 lg:text-left text-xs text-justify">
                          Intro to the conference
                        </p>
                        <p className="text-yellow-700 text-xs lg:text-md p-1 lg:px-4 text-justify lg:text-left lg:-mt-3 mb-2">
                          09:00 - 11:50
                        </p>
                      </Link>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-12 mx-auto overflow-hidden">
                      <div className="top h-5 w-full lg:mt-2">
                        <span className="text-black font-bold text-xs lg:text-base">
                          07 - 08 - 2022
                        </span>
                      </div>
                      <Link
                        href="2"
                        className="border lg:border-2 border-yellow-300 rounded-xl lg:mt-10 mt-10 hover:bg-yellow-100"
                      >
                        <p className="text-yellow-700 font-bold lg:text-lg lg:p-4 lg:text-left text-xs text-justify">
                          VIP Lunch Break
                        </p>
                        <p className="text-yellow-700  text-xs lg:text-md p-1 lg:px-4 text-justify lg:text-left lg:-mt-3 mb-2">
                          09:00 - 11:50
                        </p>
                      </Link>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                </tr>
                <tr className="text-center h-20">
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease  ">
                    <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden items-center justify-center">
                      <div className="top h-5 w-full">
                        <h2 className="text-black lg:text-2xl font-bold text-sm">
                          17.00
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-12 mx-auto overflow-hidden">
                      <div className="top h-5 w-full lg:mt-2">
                        <span className="text-black font-bold text-xs lg:text-base">
                          12 - 08 - 2022
                        </span>
                      </div>
                      <Link
                        href="2"
                        className="border lg:border-2 border-yellow-300 rounded-xl lg:mt-10 mt-10 hover:bg-yellow-100"
                      >
                        <p className="text-yellow-700 font-bold lg:text-lg lg:p-4 lg:text-left text-xs text-justify">
                          React Press Conference
                        </p>
                        <p className="text-yellow-700  text-xs lg:text-md p-1 lg:px-4 text-justify lg:text-left lg:-mt-3 mb-2">
                          10:00 - 11:00
                        </p>
                      </Link>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                </tr>
                <tr className="text-center h-20">
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease  ">
                    <div className="flex flex-col h-40 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden items-center justify-center">
                      <div className="top h-5 w-full">
                        <h2 className="text-black lg:text-2xl font-bold text-sm">
                          17.00
                        </h2>
                      </div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-12 mx-auto overflow-hidden">
                      <div className="top h-5 w-full lg:mt-2">
                        <span className="text-black font-bold text-xs lg:text-base">
                          12 - 08 - 2022
                        </span>
                      </div>
                      <Link
                        href="2"
                        className="border lg:border-2 border-blue-600 rounded-xl lg:mt-10 mt-10 hover:bg-blue-100"
                      >
                        <p className="text-blue-900 font-bold lg:text-lg lg:p-4 lg:text-left text-xs text-justify">
                          Guest Dinner Break
                        </p>
                        <p className="text-blue-900  text-xs lg:text-md p-1 lg:px-4 text-justify lg:text-left lg:-mt-3 mb-2">
                          10:00 - 11:00
                        </p>
                      </Link>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-12 mx-auto overflow-hidden">
                      <div className="top h-5 w-full lg:mt-2">
                        <span className="text-black font-bold text-xs lg:text-base">
                          12 - 08 - 2022
                        </span>
                      </div>
                      <Link
                        href="2"
                        className="border lg:border-2 border-blue-600 rounded-xl lg:mt-10 mt-10 hover:bg-blue-100"
                      >
                        <p className="text-blue-900 font-bold lg:text-lg lg:p-4 lg:text-left text-xs text-justify">
                          React Press Conference
                        </p>
                        <p className="text-blue-900  text-xs lg:text-md p-1 lg:px-4 text-justify lg:text-left lg:-mt-3 mb-2">
                          10:00 - 11:00
                        </p>
                      </Link>
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                  <td className="border p-1 h-40 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease ">
                    <div className="flex flex-col h-52 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                      <div className="bottom flex-grow h-30 py-1 w-full cursor-pointer"></div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventSchedule;
