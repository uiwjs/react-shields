import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import logo from './logo.svg';
import './App.css';
import { Github } from '../';

const App: React.FC = () => {
  return (
    <div className="App">
      <GitHubCorners href="https://github.com/uiwjs/react-shields" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-list">
          <div className="title">Github Issue</div>
          <Github.Issues user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Issues href="https://github.com/uiwjs/react-shields" type="issues" />
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
        <div className="App-list">
          <div className="title">Github Downloads</div>
          <Github.Downloads user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Downloads tag="v3.9.0" total={false}/>
            <Github.Downloads user="jaywcjlove" repo="linux-command" type="downloads-pre" tag="v1.2.2" path="linux-command.docset.zip" />
            <Github.Downloads tag="v3.9.0"/>
            <Github.Downloads tag="v3.9.0"/>
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Github Activity</div>
          <Github.Activity user="uiwjs" repo="uiw" type="commit-activity" interval="y" />
          <Github user="uiwjs" repo="uiw">
            <Github.Activity type="last-commit" />
            <Github.Activity type="last-commit" branch="gh-pages" />
            <Github.Activity type="release-date" />
            <Github.Activity type="release-date-pre" />
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Github Size</div>
          <Github.Size user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Size />
            <Github.Size type="repo-size" />
            <Github.Size type="size" path="src/index.ts" />
          </Github>
        </div>
      </header>
    </div>
  );
}

export default App;
