import React from "react";
import { fetchGifs, fetchSearchGifs } from "../../helpers/fetchGifs";
import { useState } from "react";
import PropTypes from "prop-types";
import { GifsGrid } from "./GifsGrid";
import { GifsNotFound } from "../GifsNotFound";
export const SearchGif = ({ show }) => {
  const [searchValue, setSearchValue] = useState("");
  const [notFound, setNotFound] = useState({
    category: "",
    show: false,
  });
  const [resultGifs, setResultGifs] = useState({
    gifs: [],
    loading: false,
  });
  return (
    <>
      <div
        style={{ display: show ? "flex" : "none" }}
        className="trending-gifs"
      >
        <form
          className="search-gif"
          onSubmit={async (e) => {
            e.preventDefault();
            if (searchValue.length > 0) {
              try {
                setNotFound({ category: "", show: false });
                setResultGifs({ gifs: [], loading: true });
                const gifs = await fetchSearchGifs(searchValue);
                if (gifs.length === 0) {
                  setNotFound({ category: searchValue, show: true });
                }
                setResultGifs({ gifs: gifs, loading: false });
              } catch (error) {
                setResultGifs({ gifs: [], loading: false });
              }
              // setSearchValue("");
            }
          }}
        >
          <input
            type="text"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <button className="btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </button>
        </form>
        <GifsNotFound category={notFound.category} show={notFound.show} />
        <GifsGrid loading={resultGifs.loading} gifs={resultGifs.gifs} />
      </div>
    </>
  );
};

SearchGif.propTypes = {
  // setGifs: PropTypes.func.isRequired,
};
