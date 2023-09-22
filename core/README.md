react-shields
===

[![CI](https://github.com/uiwjs/react-shields/actions/workflows/ci.yml/badge.svg)](https://github.com/uiwjs/react-shields/actions/workflows/ci.yml)
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
npm install --save @uiw/react-shields
# Via Yarn:
yarn add @uiw/react-shields
```

## Usage

```jsx
import { Github, Coverage, Npm } from '@uiw/react-shields';
// Or
import Npm from '@uiw/react-shields/npm';
import Coverage from '@uiw/react-shields/coverage';
import Github from '@uiw/react-shields/github';
```

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Issues user="uiwjs" repo="uiw" />
      <Github user="uiwjs" repo="uiw">
        <Github.Issues href="https://github.com/uiwjs/uiw" type="issues" />
        <Github.Issues type="issues-raw" />
        <Github.Issues type="issues-closed" />
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

### Github.Social

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Social user="jaywcjlove" repo="uiw" href="https://github.com/jaywcjlove" />
      <Github user="jaywcjlove" repo="awesome-mac">
        <Github.Social type="forks" />
        <Github.Social type="stars" />
        <Github.Social type="watchers" />
        <Github.Social type="followers" />
      </Github>
    </>
  );
}
```

### Npm.Version

```jsx mdx:preview
import React from 'react';
import Npm from '@uiw/react-shields/npm';

export default function Demo() {
  return (
    <>
      <Npm.Version scope="@uiw" packageName="react-shields" href="https://npmjs.com/@uiw/react-shields" />
      <Npm>
        <Npm.Version scope="@uiw" packageName="react-github-corners" />
        <Npm.Version packageName="hotkeys-js" />
        <Npm.Version packageName="kkt" version="latest" />
        <Npm.Version packageName="tsbb" />
        <Npm.Version
          scope="@uiw"
          type="peer-dependency"
          dependency="react"
          packageName="react-github-corners"
        />
      </Npm>
    </>
  );
}
```

### Npm.Size

```jsx mdx:preview
import React from 'react';
import Npm from '@uiw/react-shields/npm';

export default function Demo() {
  return (
    <>
      <Npm.Size scope="@uiw" packageName="react-shields" href="https://npmjs.com/@uiw/react-shields" />
      <Npm>
        <Npm.Size format="minzip" scope="@uiw" packageName="react-github-corners" />
        <Npm.Size packageName="hotkeys-js" />
        <Npm.Size packageName="kkt" version="latest" />
      </Npm>
    </>
  );
}
```

```jsx mdx:preview
import React from 'react';
import Npm from '@uiw/react-shields/npm';

export default function Demo() {
  const [scope, setScope] = React.useState('@uiw');
  const [packageName, setPackageName] = React.useState('react-shields');
  return (
    <>
      <Npm.Size scope={scope} packageName={packageName} />
      <div>
        <button onClick={() => setPackageName('react-shields')}>react-shields</button>
        <button onClick={() => setPackageName('react-codemirror')}>react-codemirror</button>
      </div>
    </>
  );
}
```

### Npm.Downloads

```jsx mdx:preview
import React from 'react';
import Npm from '@uiw/react-shields/npm';

export default function Demo() {
  return (
    <>
      <Npm.Downloads scope="@uiw" packageName="react-shields" href="https://npmjs.com/@uiw/react-shields" />
      <Npm>
        <Npm.Downloads interval="dw" scope="@uiw" packageName="react-github-corners" />
        <Npm.Downloads packageName="hotkeys-js" />
      </Npm>
    </>
  );
}
```

### Github.Issues

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Issues user="uiwjs" repo="uiw" href="https://github.com/uiwjs/react-shields/issues" />
      <Github user="uiwjs" repo="uiw">
        <Github.Issues type="issues" href="https://github.com/uiwjs/react-shields/issues" />
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
    </>
  );
}
```

### Github.Size

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
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

### Github.Downloads

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Downloads user="uiwjs" repo="uiw" href="https://github.com/uiwjs/uiw/issues" />
      <Github user="uiwjs" repo="uiw">
        <Github.Downloads />
        <Github.Downloads total={false}/>
        <Github.Downloads type="downloads-pre" />
        <Github.Downloads total={false} tag="v3.9.0"/>
        <Github.Downloads tag="v3.9.0"/>
      </Github>
    </>
  );
}
```

### Github.Version

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Version user="uiwjs" repo="uiw" href="https://github.com/uiwjs/uiw/issues" />
      <Github user="uiwjs" repo="uiw">
        <Github.Version type="version-tag" href="https://github.com/uiwjs/uiw/issues" />
        <Github.Version type="package-json" />
        <Github.Version type="package-json" branch="dev" />
        <Github.Version user="jaywcjlove" repo="wxmp" type="manifest-json" />
        <Github.Version user="jaywcjlove" repo="wxmp" type="manifest-json" branch="master" />
        <Github.Version user="x-mod" repo="routine" type="go-mod" />
        <Github.Version user="x-mod" repo="routine" type="go-mod" branch="master" />
      </Github>
    </>
  );
}
```

### Github.License

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.License user="uiwjs" repo="uiw" href="https://github.com/uiwjs/uiw/blob/master/LICENSE" />
      <Github user="uiwjs" repo="uiw">
        <Github.License />
      </Github>
    </>
  );
}
```

### Github.Analysis

```jsx mdx:preview
import React from 'react';
import Github from '@uiw/react-shields/github';

export default function Demo() {
  return (
    <>
      <Github.Analysis user="uiwjs" repo="uiw" href="https://github.com/uiwjs/uiw/issues" />
      <Github user="uiwjs" repo="uiw">
        <Github.Analysis type="languages-top" />
        <Github.Analysis type="search" query="github" />
      </Github>
    </>
  );
}
```

### Coverage.Coverages

```jsx mdx:preview
import React from 'react';
import Coverage from '@uiw/react-shields/coverage';

export default function Demo() {
  return (
    <>
      <Coverage.Coverages user="jaywcjlove" repo="hotkeys" href="https://github.com/uiwjs/uiw/issues" />
      <Coverage user="jaywcjlove" repo="hotkeys">
        <Coverage.Coverages type="github"  />
        <Coverage.Coverages type="github" />
      </Coverage>
    </>
  );
}
```

### Coverage.Codacy

```jsx mdx:preview
import React from 'react';
import Coverage from '@uiw/react-shields/coverage';

export default function Demo() {
  return (
    <>
      <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" href="https://github.com/uiwjs/uiw/issues" />
      <Coverage user="jaywcjlove" repo="hotkeys">
        <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" branch="master" />
        <Coverage.Codacy projectId="1c524e61cd8640e79b80d406eda8754b" />
      </Coverage>
    </>
  );
}
```

## Development

Runs the project in development mode.  

```bash
# Step 1, run first, listen to the component compile and output the .js file
# listen for compilation output type .d.ts file
npm run watch
# Step 2, development mode, listen to compile preview website instance
npm run start
```

**production**

Builds the app for production to the build folder.

```bash
npm run build
```

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

## Contributors

As always, thanks to our amazing contributors!

<a href="https://github.com/uiwjs/react-shields/graphs/contributors">
  <img src="https://uiwjs.github.io/react-shields/CONTRIBUTORS.svg" />
</a>

Made with [action-contributors](https://github.com/jaywcjlove/github-action-contributors).

## License

Licensed under the MIT License.
