import React from "react";
import { Loader } from "../Loader";

export const GifsGrid = ({ loading = true, gifs }) => {
  const displayGifs = () => {
    if (loading) return <Loader />;
    return gifs.map((gif) => {
      return <img key={gif.id} src={gif.url} alt={gif.title}></img>;
    });
  };

  return <div className="gifs-grid">{displayGifs()}</div>;
};
