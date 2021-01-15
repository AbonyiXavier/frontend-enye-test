import React, { useState } from "react";
import avatar from "./../../images/avatar.jpg";
import blueIcon from "./../../images/blue-icon.jpg";

const Profile = ({ profileInfo, loading }) => {
  const [searchProfile, setSearchProfile] = useState("");
  const handleSearch = (event) => {
    setSearchProfile(event.target.value);
  };

  if (loading) {
    return (
      <div className="fixed top-0 bottom-0 left-0 right-0 z-50 flex flex-col items-center justify-center w-full h-screen overflow-hidden bg-gray-700 opacity-75">
        <div className="w-12 h-12 mb-4 ease-linear border-4 border-t-4 border-gray-200 rounded-full loader"></div>
        <h2 className="text-xl font-semibold text-center text-white">
          Loading...
        </h2>
        <p className="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    );
  }
  // const checkColor = (value) => {
  //   if (value === "paypal") {
  //     return "green";
  //   }
  // };
  return (
    <div className="w-full">
      <div className="flex items-center w-full px-4 py-2 mb-2 text-black bg-blue-100">
        <div className="text-xl font-bold">Profile Information</div>
      </div>
      <p className="mb-2 text-sm text-center">
        Search by First Name or Payment Method
      </p>
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
              className="max-w-sm my-4 ml-1 overflow-hidden bg-white rounded-lg shadow-lg "
            >
              <img
                className="object-cover object-center w-full h-56"
                src={blueIcon}
                alt="avatar"
              />
              <div className="flex items-center px-6 py-3 bg-gray-900">
                <img
                  className="w-6 h-6 rounded-full"
                  src={avatar}
                  alt="avatar"
                />
                <h1 className="mx-3 text-lg font-semibold text-white">
                  Profile
                </h1>
              </div>
              <div className="px-6 py-4">
                <h1 className="text-2xl font-semibold text-gray-800">
                  {info.FirstName} {info.LastName}
                </h1>
                <p className="py-2 text-lg text-gray-700">
                  {info.CreditCardType}
                </p>
                <p className="py-2 text-lg text-gray-700">
                  {info.CreditCardNumber}
                </p>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                    <path d="M239.208 343.937c-17.78 10.103-38.342 15.876-60.255 15.876-21.909 0-42.467-5.771-60.246-15.87C71.544 358.331 42.643 406 32 448h293.912c-10.639-42-39.537-89.683-86.704-104.063zM178.953 120.035c-58.479 0-105.886 47.394-105.886 105.858 0 58.464 47.407 105.857 105.886 105.857s105.886-47.394 105.886-105.857c0-58.464-47.408-105.858-105.886-105.858zm0 186.488c-33.671 0-62.445-22.513-73.997-50.523H252.95c-11.554 28.011-40.326 50.523-73.997 50.523z" />
                    <g>
                      <path d="M322.602 384H480c-10.638-42-39.537-81.691-86.703-96.072-17.781 10.104-38.343 15.873-60.256 15.873-14.823 0-29.024-2.654-42.168-7.49-7.445 12.47-16.927 25.592-27.974 34.906C289.245 341.354 309.146 364 322.602 384zM306.545 200h100.493c-11.554 28-40.327 50.293-73.997 50.293-8.875 0-17.404-1.692-25.375-4.51a128.411 128.411 0 0 1-6.52 25.118c10.066 3.174 20.779 4.862 31.895 4.862 58.479 0 105.886-47.41 105.886-105.872 0-58.465-47.407-105.866-105.886-105.866-37.49 0-70.427 19.703-89.243 49.09C275.607 131.383 298.961 163 306.545 200z" />
                    </g>
                  </svg>
                  <h1 className="px-2 text-sm">{info.Gender}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                    <path d="M256 32c-88.004 0-160 70.557-160 156.801C96 306.4 256 480 256 480s160-173.6 160-291.199C416 102.557 344.004 32 256 32zm0 212.801c-31.996 0-57.144-24.645-57.144-56 0-31.357 25.147-56 57.144-56s57.144 24.643 57.144 56c0 31.355-25.148 56-57.144 56z" />
                  </svg>
                  <h1 className="px-2 text-sm">{info.MacAddress}</h1>
                </div>
                <div className="flex items-center mt-4 text-gray-700">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 512 512">
                    <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32 412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480 389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256 288 80 170.667V128l176 117.333L432 128v42.667z" />
                  </svg>
                  <h1 className="px-2 text-sm">{info.Email}</h1>
                </div>
                <div>
                  {/* style={checkColor} */}
                  <p
                    className={`inline-block px-2 py-1 mt-2 mr-1 text-sm font-bold text-black duration-300 bg-gray-200 rounded-full md:mr-2 md:px-4 opacity-90 ${
                      info.PaymentMethod === "check" && "text-green-500"
                    } ${info.PaymentMethod === "paypal" && "text-purple-400"} ${
                      info.PaymentMethod === "cc" && "text-red-400"
                    } ${info.PaymentMethod === "paypal" && "text-purple-400"}`}
                  >
                    {info.PaymentMethod}
                  </p>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
