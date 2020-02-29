import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function DiscoverMoviesPage() {
  const [searchText, set_searchText] = useState("");

  const [status, set_search_status] = useState("");

  const [page, setPage] = useState([]);

  const search = async () => {
    set_search_status("Searching  ");
    // Best practice: encode the string so that special characters
    //  like '&' and '?' don't accidentally mess up the URL

    const queryParam = encodeURIComponent(searchText);
    // Option A: use the browser-native fetch function

    const data = await fetch(
      `https://omdbapi.com/?s=${queryParam}&apikey=d3a07d28`
    ).then(r => r.json());

    set_search_status("No search results");
    console.log("Success!", data.Search);
    setPage(data.Search);
  };
  //log the retrieved data

  //already changed the path
  const searchResults =
    page &&
    page.map(page => {
      return (
        <div className="movieList">
          <p>
            <Link to={`/movielist/${page.imdbID}`}>Title: {page.Title}</Link>
          </p>
          <img src={page.Poster} alt="photos"></img>
        </div>
      );
    });

  //if true, so if page renders it isnt empty anymore
  //if true render page if not render searching

  return (
    <div>
      <h1>Discover some movies!</h1>
      <p>
        <input
          value={searchText}
          onChange={e => set_searchText(e.target.value)}
        />
        <button onClick={search}>Search</button>
      </p>
      <div>{page ? searchResults : status}</div>
    </div>
  );
}
