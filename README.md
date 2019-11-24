react-shields.io
===

[![](https://img.shields.io/github/issues/uiwjs/react-shields.svg)](https://github.com/uiwjs/react-shields/issues)
[![](https://img.shields.io/github/forks/uiwjs/react-shields.svg)](https://github.com/uiwjs/react-shields/network)
[![](https://img.shields.io/github/stars/uiwjs/react-shields.svg)](https://github.com/uiwjs/react-shields/stargazers)
[![](https://img.shields.io/github/v/release/uiwjs/react-shields.svg)](https://github.com/uiwjs/react-shields/releases)
[![](https://img.shields.io/npm/v/@uiw/react-shields.svg)](https://www.npmjs.com/package/@uiw/react-shields)
[![](https://jaywcjlove.github.io/sb/ico/gitee.svg)](https://gitee.com/uiw/react-shields)

<!--dividing-->

[Shields.io](https://shields.io/): Quality metadata badges open source projects for react component.

## Install

```bash
npm install --save react-shields.io
# Via Yarn:
yarn add react-shields.io
```

## Usage

```jsx
import GitHub from 'react-shields.io';

function Demo() {
  return (
    <>
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
      <Github.Size user="uiwjs" repo="uiw" />
      <Github user="uiwjs" repo="uiw">
        <Github.Size />
        <Github.Size type="repo-size" />
        <Github.Size type="size" />
      </Github>
    </>
  );
}
```

## Development

```bash
# Step 1, Run first, the listener component compiles the output .js file
npm run ts:watch
# Step 2, Listen for compiled output type .d.ts file
npm run types:watch
# Step 3, Development mode, listen to compile preview site instance
npm run doc:dev
```

Compile and release

```bash
npm run released
```