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
            className="relative block px-3 py-2 leading-tight text-blue-700 bg-white border border-r-0 border-gray-300 hover:bg-gray-200"
            key={number}
          >
            <a className="page-link" onClick={() => Paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Pagination;
