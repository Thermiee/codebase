import React from 'react';
import Timer from "./Timer"
//import logo from './logo.svg';
import './App.css';
import ZenQuote from './ZenQuote';
import GithubUserInfo from './GithubUserInfo';

function App() {
  return (
    <div className="App">
      {/* <Timer /> */}
      <ZenQuote />
      <GithubUserInfo username="facebook" />
      <GithubUserInfo username="Thermiee"/>
    </div>
  );
}

export default App;
