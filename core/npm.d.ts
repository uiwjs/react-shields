declare module '@uiw/react-shields/npm' {
  import Container from '@uiw/react-shields/esm/common/Container';
  import Version from '@uiw/react-shields/esm/npm/Version';
  import Size from '@uiw/react-shields/esm/npm/Size';
  import Downloads from '@uiw/react-shields/esm/npm/Downloads';
  type NpmComponent = typeof Container & {
    Version: typeof Version;
    Size: typeof Size;
    Downloads: typeof Downloads;
  };
  const Npm: NpmComponent;
  export default Npm;
}
