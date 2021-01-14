import React, { useState } from "react";
import avatar from "./../../images/avatar.jpg";

const Profile = ({ profileInfo }) => {
  const [searchProfile, setSearchProfile] = useState("");
  const handleSearch = (event) => {
    setSearchProfile(event.target.value);
  };
  // if (loading) {
  //   return (
  //     <div class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center">
  //       <div class="loader ease-linear rounded-full border-4 border-t-4 border-gray-200 h-12 w-12 mb-4"></div>
  //       <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
  //       <p class="w-1/3 text-center text-white">
  //         This may take a few seconds, please don't close this page.
  //       </p>
  //     </div>
  //   );
  // }

  return (
    <div className="w-full bg-gray-300">
      <div className="flex items-center w-full px-4 py-2 mb-2 text-black bg-blue-100">
        <div className="text-xl font-bold">Profile Information</div>
      </div>
      <p className="mb-2 text-sm">Search by FirstName or PaymentMethod</p>
      <div className="flex items-center justify-center font-sans text-black bg-white">
        <div className="flex m-3 overflow-hidden bg-gray-300 border rounded-full">
          <span className="flex items-center justify-center px-2 border-l">
            <svg
              className="w-4 h-4 text-grey-dark"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" />
            </svg>
          </span>
          <input
            type="text"
            className="px-2 py-2 text-black bg-gray-200"
            placeholder="Search..."
            onChange={handleSearch}
          />
        </div>
      </div>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4">
        {profileInfo
          // eslint-disable-next-line array-callback-return
          .filter((info) => {
            if (searchProfile === "") {
              return info;
            } else if (
              info.FirstName.toLowerCase().includes(
                searchProfile.toLowerCase()
              ) ||
              info.PaymentMethod.toLowerCase().includes(
                searchProfile.toLowerCase()
              )
            ) {
              return info;
            }
          })
          .map((info, i) => (
            <div
              key={i}
              className="flex items-center justify-center w-full m-3"
            >
              <div className="max-w-xs">
                <div className="py-3 bg-white rounded-lg shadow-xl">
                  <div className="p-2 photo-wrapper">
                    <img
                      className="w-32 h-32 mx-auto rounded-full"
                      src={avatar}
                      alt="avatar"
                    />
                  </div>
                  <div className="p-2">
                    <h3 className="text-xl font-medium leading-8 text-center text-gray-900">
                      {info.FirstName} {info.LastName}
                    </h3>
                    <div className="text-xs font-semibold text-center text-gray-400">
                      <p>{info.Gender}</p>
                    </div>
                    <table className="my-3 text-xs">
                      <tbody>
                        <tr>
                          <td className="px-2 py-2 font-semibold text-gray-500">
                            Username
                          </td>
                          <td className="px-2 py-2">{info.UserName}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 font-semibold text-gray-500">
                            Phone Number
                          </td>
                          <td className="px-2 py-2">{info.PhoneNumber}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 font-semibold text-gray-500">
                            Email Address
                          </td>
                          <td className="px-2 py-2">{info.Email}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 font-semibold text-gray-500">
                            Card Type
                          </td>
                          <td className="px-2 py-2">{info.CreditCardType}</td>
                        </tr>
                        <tr>
                          <td className="px-2 py-2 font-semibold text-gray-500">
                            Card Number
                          </td>
                          <td className="px-2 py-2">{info.CreditCardNumber}</td>
                        </tr>
                      </tbody>
                    </table>

                    <div className="my-3 text-center">
                      <a
                        className="text-xs italic font-medium text-indigo-500 hover:underline hover:text-indigo-600"
                        href="!#"
                      >
                        {info.PaymentMethod}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
