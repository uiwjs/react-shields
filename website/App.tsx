import React from 'react';
import GitHubCorners from '@uiw/react-github-corners';
import MarkdownPreview from '@uiw/react-markdown-preview';
import '@wcj/dark-mode';
import './App.css';
import logo from './logo.svg';
import MDStr from '../README.md';
import { Github, Coverage, Npm } from '../';

const App: React.FC = () => {
  return (
    <div className="App">
      <dark-mode light="Light" dark="Dark" style={{ position: 'fixed', top: 8, left: 10 }}></dark-mode>
      <GitHubCorners href="https://github.com/uiwjs/react-shields" />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className="App-list">
          <div className="title">Github Social</div>
          <Github.Social user="jaywcjlove" repo="uiw" href="https://github.com/jaywcjlove" />
          <Github user="jaywcjlove" repo="awesome-mac">
            <Github.Social type="forks" />
            <Github.Social type="stars" />
            <Github.Social type="watchers" />
            <Github.Social type="followers" />
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Npm Version</div>
          <Npm.Version scope="@uiw" packageName="react-shields" />
          <Npm>
            <Npm.Version scope="@uiw" packageName="react-github-corners" />
            <Npm.Version packageName="hotkeys-js" />
            <Npm.Version packageName="kkt" version="latest" />
            <Npm.Version packageName="tsbb" />
            <Npm.Version scope="@uiw" type="peer-dependency" dependency="react"  packageName="react-github-corners" />
          </Npm>
        </div>
        <div className="App-list">
          <div className="title">Npm Size</div>
          <Npm.Size scope="@uiw" packageName="react-shields" />
          <Npm>
            <Npm.Size format="minzip" scope="@uiw" packageName="react-github-corners" />
            <Npm.Size packageName="hotkeys-js" />
            <Npm.Size packageName="kkt" version="5.0.0-alpha.12" />
          </Npm>
        </div>
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
        <div className="App-list">
          <div className="title">Github Version</div>
          <Github.Version user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Version type="version-tag" />
            <Github.Version type="package-json" />
            <Github.Version type="package-json" branch="dev" />
            <Github.Version user="jaywcjlove" repo="wxmp" type="manifest-json" />
            <Github.Version user="jaywcjlove" repo="wxmp" type="manifest-json" branch="master" />
            <Github.Version user="x-mod" repo="routine" type="go-mod" />
            <Github.Version user="x-mod" repo="routine" type="go-mod" branch="master" />
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Github License</div>
          <Github.License user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.License />
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Github Analysis</div>
          <Github.Analysis user="uiwjs" repo="uiw" />
          <Github user="uiwjs" repo="uiw">
            <Github.Analysis type="languages-top" />
            <Github.Analysis type="search" query="github" />
          </Github>
        </div>
        <div className="App-list">
          <div className="title">Github Coverages</div>
          <Coverage.Coverages user="jaywcjlove" repo="hotkeys" />
          <Coverage user="jaywcjlove" repo="hotkeys">
            <Coverage.Coverages type="github"  />
            <Coverage.Coverages type="github" />
          </Coverage>
        </div>
        <div className="App-list">
          <div className="title">Codacy Coverages</div>
          <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" />
          <Coverage user="jaywcjlove" repo="hotkeys">
            <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" branch="master" />
            <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" />
          </Coverage>
        </div>
      </header>
      <div className="info">
        <MarkdownPreview className="App-markdown" source={MDStr.replace(/([\s\S]*)<!--dividing-->/, '')} />
      </div>
    </div>
  );
}

export default App;
