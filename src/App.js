import React from "react";
import "./App.css";
import Row from "./components/Row";
import requests from "./requests";
import Banner from "./components/Banner";

function App() {
  return (
    <div className="App">
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUr={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Romance" fetchUrl-={requests.fetchRomanceMovies} />
      <Row title="Horror" fetchUrl-={requests.fetchHorrorMovies} />
      <Row title="Documentaries" fetchUrl-={requests.fetchDocumentaries} />
      <Row title="Action" fetchUrl-={requests.fetchActionMovies} />
    </div>
  );
}

export default App;
