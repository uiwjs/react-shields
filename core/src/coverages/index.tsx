import Container, { ContainerProps } from '../common/Container';
import Coverages from './Coverages';
import Codacy from './Codacy';

type CoverageComponent = typeof Container & {
  Coverages: typeof Coverages;
  Codacy: typeof Codacy;
};

const Coverage = (props: ContainerProps) => (<Container {...props} />) as unknown as CoverageComponent;
Coverage.Coverages = Coverages;
Coverage.Codacy = Codacy;
Coverage.displayName = 'Github';

export default Coverage;
