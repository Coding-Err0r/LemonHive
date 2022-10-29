import React from "react";
import { SortableElement } from "react-sortable-hoc";

const SortableItem = (props: any) => {
  return (
    <>
      <li className="card my-6 flex flex-col items-center cursor-pointer hover:bg-yellow-500">
        <div className="bg-white absolute rounded-lg w-14 h-14 mt-2 mr-72">
          <svg
            width="29"
            height="26"
            viewBox="0 0 29 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-4 mt-4"
          >
            <path
              d="M22 24L17 19.1111M7 2V24V2ZM7 2L12 6.88889L7 2ZM7 2L2 6.88889L7 2ZM22 24V2V24ZM22 24L27 19.1111L22 24Z"
              stroke="#FFC93E"
              stroke-width="3"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
        <p className="mt-6 text-xl font-bold">{props.value}</p>
      </li>
      <style jsx>
        {`
          .card {
            width: 365px;
            height: 72px;
            left: 299px;
            top: 489px;
            box-shadow: 0px 10px 20px rgba(162, 162, 162, 0.25);
            border-radius: 8px;
          }
        `}
      </style>
    </>
  );
};

export default SortableElement(SortableItem);
