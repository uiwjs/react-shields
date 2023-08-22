import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
import { Github, Npm } from '@uiw/react-shields';
import data from '../../core/README.md';
import pkg from '../../core/package.json';

const GithubEx = MarkdownPreviewExample.Github;
const Example = MarkdownPreviewExample.Example;

const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <MarkdownPreviewExample
    source={data.source}
    components={data.components}
    data={data.data}
    title="react-shields"
    description={pkg.description}
    version={`v${pkg.version}`}
  >
    <GithubEx href="https://github.com/uiwjs/react-shields" />
    <Example>
      <div>
        <Github.Social user="jaywcjlove" repo="uiw" href="https://github.com/jaywcjlove" />
        <Github user="uiwjs" repo="react-shields">
          <Github.Social type="forks" />
          <Github.Social type="stars" />
          <Github.Social type="watchers" />
          <Github.Social type="followers" />
          <Npm.Version scope="@uiw" packageName="react-shields" />
        </Github>
      </div>
    </Example>
  </MarkdownPreviewExample>,
);
