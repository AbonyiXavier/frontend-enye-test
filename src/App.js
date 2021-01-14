import React, { useState, useEffect } from "react";
import "./index.css";
// import DisplayProfile from "./components/Display_profile";
import Profile from "./components/Display_profile/profile_page";
import Pagination from "./components/Pagination/pagination";
import FilterDropDown from "./components/dropdown/filter_dropdown";
import axios from "axios";
function App() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profileInfoPerPage, setProfileInfoPerPage] = useState(20);
  const [searchProfile, setSearchProfile] = useState("");
  const [item, setItem] = useState("");

  useEffect(() => {
    const fetchProfile = async () => {
      setLoading(true);
      const response = await axios.get(
        "http://api.enye.tech/v1/challenge/records"
      );
      console.log("res", response.data.records.profiles);
      setProfileInfo(response.data.records.profiles);
      setLoading(false);
    };

    fetchProfile();
  }, []);

  // Get Current profileInfo
  const indexOfLastProfile = currentPage * profileInfoPerPage;
  const indexOfFirstProfile = indexOfLastProfile - profileInfoPerPage;
  const currentProfile = profileInfo.slice(
    indexOfFirstProfile,
    indexOfLastProfile
  );

  // Pagination
  const Paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // const handleSelect = (event) => {
  //   setItem(event.target.value);
  // };
  //search profile
  // const handleSearch = (event) => {
  //   setSearchProfile(event.target.value);
  // };

  // const filteredProfile = profileInfo.filter((info) =>
  //   info.FirstName.toLowerCase().includes(searchProfile.toLowerCase())
  // );

  return (
    <div className="container">
      <div>
        {/* <h1 className="text-2xl sm:font-black ">Profile Information</h1> */}
        {/* <div> */}
        {/* <h2 className="py-4">Filter by</h2> */}
        {/* <div className="">
            <input
              type="text"
              className="px-4 py-2 bg-white"
              placeholder="Find in list"
              onChange={handleSearch}
            />
          </div> */}
        {/* </div> */}
        {/* <FilterDropDown data={profileInfo} handleSelect={handleSelect} /> */}
        <Profile profileInfo={currentProfile} loading={loading} />
        <Pagination
          profileInfoPerPage={profileInfoPerPage}
          totalProfile={profileInfo.length}
          Paginate={Paginate}
        />
        {/* <Profile profileInfo={currentProfile} loading={loading} /> */}
        {/* profileInfo={filteredProfile} */}
      </div>
    </div>
  );
}

export default App;
