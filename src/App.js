import React from 'react';
import './App.css';
import Row from './components/Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1>Hi There</h1>
      <Row title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title="Trending Now" fetchUr={requests.fetchTrending}l/>
    </div>
  );
}

export default App;
