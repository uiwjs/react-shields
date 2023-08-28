declare module '@uiw/react-shields/coverage' {
  import Container from '@uiw/react-shields/esm/common/Container';
  import Coverages from '@uiw/react-shields/esm/coverages/Coverages';
  import Codacy from '@uiw/react-shields/esm/coverages/Codacy';
  type CoverageComponent = typeof Container & {
    Coverages: typeof Coverages;
    Codacy: typeof Codacy;
  };
  const Coverage: CoverageComponent;
  export default Coverage;
}
