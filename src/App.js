import React, { useState, useEffect } from "react";
import "./index.css";
// import DisplayProfile from "./components/Display_profile";
import Profile from "./components/Display_profile/profile_page";
import Pagination from "./components/Pagination/pagination";
import axios from "axios";
function App() {
  const [profileInfo, setProfileInfo] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [profileInfoPerPage, setProfileInfoPerPage] = useState(20);

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

  return (
    <div className="container">
      <div>
        <Profile profileInfo={currentProfile} loading={loading} />
        <Pagination
          profileInfoPerPage={profileInfoPerPage}
          totalProfile={profileInfo.length}
          Paginate={Paginate}
        />
      </div>
    </div>
  );
}

export default App;
