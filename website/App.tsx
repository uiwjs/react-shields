import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Github } from '../';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <div>Github Issue</div>
          <Github.Issues user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Issues type="issues" />
            <Github.Issues type="issues-raw" />
            <Github.Issues type="issues-closed" />
            <Github.Issues type="issues-closed-raw" />
            <Github.Issues type="issues-pr" />
            <Github.Issues type="issues-pr-raw" />
            <Github.Issues type="issues-pr-closed" />
            <Github.Issues type="issues-pr-closed-raw" />
            <Github.Issues type="issues" label="bug" />
            <Github.Issues type="issues-raw" label="bug" />
            <Github.Issues type="issues-pr" label="bug" />
            <Github.Issues type="issues-pr-raw" label="bug" />
          </Github>
        </div>
        <div>
          <div>Github Size</div>
          <Github.Size user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Size />
            <Github.Size type="repo-size" />
            <Github.Size type="size" />
          </Github>

        </div>
      </header>
    </div>
  );
}

export default App;
