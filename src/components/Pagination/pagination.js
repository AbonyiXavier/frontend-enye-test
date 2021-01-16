import React from "react";

const Pagination = ({ profileInfoPerPage, totalProfile, Paginate }) => {
  const pageNumbers = [];
  let num = 0;
  for (let i = 1; i <= Math.ceil(totalProfile / profileInfoPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <div>
        <ul className="flex items-center justify-center pl-0 my-2 rounded mb-5list-none">
          <li className="relative block px-3 py-2 ml-0 leading-tight text-blue-700 bg-white border border-r-0 border-gray-300 rounded-l hover:bg-gray-200">
            <a className="page-link" onClick={() => Paginate(--num)} href="!#">
              Previous
            </a>
          </li>
          {pageNumbers.map((number) => {
            num = number;
            return (
              <>
                <li
                  key={number}
                  className="relative block px-3 py-2 leading-tight text-blue-700 bg-white border border-r-0 border-gray-300 hover:bg-gray-200"
                >
                  <a
                    className="page-link"
                    onClick={() => Paginate(number)}
                    href="!#"
                  >
                    {number}
                  </a>
                </li>
              </>
            );
          })}

          <li className="relative block px-3 py-2 leading-tight text-blue-700 bg-white border border-gray-300 rounded-r hover:bg-gray-200">
            <a className="page-link" onClick={() => Paginate(num++)} href="!#">
              Next
            </a>
          </li>
        </ul>
      </div>

      {/* <ul className="flex items-center justify-center mb-5">
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
      </ul> */}
    </div>
  );
};

export default Pagination;
