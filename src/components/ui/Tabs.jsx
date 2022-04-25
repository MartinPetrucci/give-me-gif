import React from "react";
import { SearchGif } from "../tabs/SearchGif";
import { useState } from "react";
import { GenericTab } from "../tabs/GenericTab";
import { fetchRandomGifs, fetchTrendingGifs } from "../../helpers/fetchGifs";

export const Tabs = () => {
  const [activeTab, setActiveTab] = useState("trendingTab");

  const handleTabClick = ({ target }) => {
    const btns = document.querySelectorAll(".tabs > button");
    Array.from(btns).forEach((btn) => {
      if (btn.id !== target.id) {
        btn.classList.remove("active-tab");
      } else {
        btn.classList.add("active-tab");
      }
    });
    setActiveTab(target.id);
  };
  return (
    <div className="board">
      <div className="tabs">
        <button
          id="trendingTab"
          className="active-tab"
          onClick={handleTabClick}
          style={{ borderRadius: "5px 5px 0px 0px" }}
        >
          Trending
        </button>
        <button
          id="randomTab"
          onClick={handleTabClick}
          style={{ borderRadius: "5px 5px 0px 0px" }}
        >
          Random
        </button>
        <button
          id="searchTab"
          onClick={handleTabClick}
          style={{ borderRadius: "5px 5px 0px 0px" }}
        >
          Search
        </button>
      </div>
      <GenericTab show={activeTab === "trendingTab"} fetchFunction={fetchTrendingGifs} />
      <GenericTab show={activeTab === "randomTab"} fetchFunction={fetchRandomGifs} reloadButton={true}/>
      <SearchGif show={activeTab === "searchTab"} />
    </div>
  );
};
