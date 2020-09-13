import React from "react";
import "./search-section.scss";

export const SearchSection = (props: any) => {
  const { location } = props;
  return (
    <div className="search-section">
      <ul>
        <li>
          <label htmlFor="">
            <input
              placeholder={`Search in ${location}...`}
              type="text"
              className="search-movie"
            />
            <i className="fas fa-search"></i>
          </label>
        </li>
        <li>
          <label htmlFor="movie-name"></label>
          <select name="movie-genre" className="movie-genre">
            <option value="">Action</option>
            <option value="">History</option>
            <option value="">Adventure</option>
            <option value="">Drama</option>
            <option value="">Romance</option>
            <option value="">War</option>
            <option value="">Fantasy</option>
          </select>
        </li>
      </ul>
    </div>
  );
};
