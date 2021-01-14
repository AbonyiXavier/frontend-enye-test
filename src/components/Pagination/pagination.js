import React from "react";

const Pagination = ({ profileInfoPerPage, totalProfile, Paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalProfile / profileInfoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="flex items-center justify-center mb-5">
        {pageNumbers.map((number) => (
          <li
            className="flex items-center justify-center w-8 h-8 p-1 mr-3 text-white bg-blue-500 rounded-full cursor-pointer hover:bg-blue-700"
            key={number}
          >
            <a onClick={() => Paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
