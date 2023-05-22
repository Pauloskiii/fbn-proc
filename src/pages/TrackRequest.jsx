import React from "react";
import SideNav from "../components/SideNav";
import Header from "../components/Header";
import RecentRequest from "../components/RecentRequest";
import RecentRequestProc from "../components/RecentRequestProc";
import FilterForm from "../components/FilterForm";

const TrackRequest = () => {
  const currentPage = "Track Request";

  return (
    <div>
      <div className="flex">
        <div className="">
          <SideNav itemNum={role === "ADMIN" ? "2" : "1"} />
        </div>
        <div className="main-div ml-80 w-full py-6 px-8">
          <Header currentPage={currentPage} />
          {role === "PROC" ? <FilterForm /> : ""}
          {role === "ADMIN" || role === "HBS" ? (
            <RecentRequest />
          ) : (
            <RecentRequestProc />
          )}
        </div>
      </div>
    </div>
  );
};

export default TrackRequest;
