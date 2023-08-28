import { createRoot } from 'react-dom/client';
import MarkdownPreviewExample from '@uiw/react-markdown-preview-example';
// import Github from '@uiw/react-shields/github';
// import Npm from '@uiw/react-shields/npm';
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
      <div></div>
    </Example>
  </MarkdownPreviewExample>,
);
