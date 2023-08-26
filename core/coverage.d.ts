declare module '@uiw/react-shields/coverage' {
  import Container from '@uiw/react-shields/esm/common/Container';
  import Coverages from '@uiw/react-shields/esm/coverages/Coverages';
  import Codacy from '@uiw/react-shields/esm/coverages/Codacy';
  export default class Coverage extends Container {
    static Coverages: typeof Coverages;
    static Codacy: typeof Codacy;
  }
}
