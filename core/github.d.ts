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
  type GithubComponent = typeof Container & {
    Issues: typeof Issues;
    Size: typeof Size;
    Downloads: typeof Downloads;
    License: typeof License;
    Activity: typeof Activity;
    Analysis: typeof Analysis;
    Version: typeof Version;
    Social: typeof Social;
  };
  const Github: GithubComponent;
  export default Github;
}
