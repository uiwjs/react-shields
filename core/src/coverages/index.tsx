import Container, { ContainerProps } from '../common/Container';
import Coverages from './Coverages';
import Codacy from './Codacy';

const Coverage = (props: ContainerProps) => <Container {...props} />;
Coverage.Coverages = Coverages;
Coverage.Codacy = Codacy;
Coverage.displayName = 'Github';

export default Coverage;
