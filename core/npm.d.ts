declare module '@uiw/react-shields/npm' {
  import Container from '@uiw/react-shields/esm/common/Container';
  import Version from '@uiw/react-shields/esm/npm/Version';
  import Size from '@uiw/react-shields/esm/npm/Size';
  import Downloads from '@uiw/react-shields/esm/npm/Downloads';
  export default class Npm extends Container {
    static Version: typeof Version;
    static Size: typeof Size;
    static Downloads: typeof Downloads;
  }
}
