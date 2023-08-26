declare module '@uiw/react-shields/github' {
  import Container from '@uiw/react-shields/esm/common/Container';
  import Issues from '@uiw/react-shields/esm/github/Issues';
  import Size from '@uiw/react-shields/esm/github/Size';
  import Downloads from '@uiw/react-shields/esm/github/Downloads';
  import Activity from '@uiw/react-shields/esm/github/Activity';
  import Version from '@uiw/react-shields/esm/github/Version';
  import License from '@uiw/react-shields/esm/github/License';
  import Analysis from '@uiw/react-shields/esm/github/Analysis';
  import Social from '@uiw/react-shields/esm/github/Social';
  export default class Github extends Container {
    static Issues: typeof Issues;
    static Size: typeof Size;
    static Activity: typeof Activity;
    static Downloads: typeof Downloads;
    static Version: typeof Version;
    static License: typeof License;
    static Analysis: typeof Analysis;
    static Social: typeof Social;
  }
}
