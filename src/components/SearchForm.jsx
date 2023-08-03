// SearchForm.js
import React from "react";

const SearchForm = ({ inputData, setInputData, handleFormSubmit, message }) => {
  return (
    <div className="App">
      <h1>Image-Search-App</h1>
      <form action="" onSubmit={handleFormSubmit}>
        <input
          type="text"
          id="search-input"
          placeholder="search for images"
          value={inputData}
          onChange={(e) => setInputData(e.target.value)}
        />
        <button id="search-button" type="submit">
          Search
        </button>
      </form>
      <p className={message ? "message" : "message hide"}>✖️image does not found!</p>
    </div>
  );
};

export default SearchForm;
