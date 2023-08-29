import Container, { ContainerProps } from '../common/Container';
import Version from './Version';
import Size from './Size';
import Downloads from './Downloads';

const Npm = (props: ContainerProps) => <Container {...props} />;

Npm.Version = Version;
Npm.Size = Size;
Npm.Downloads = Downloads;
Npm.displayName = 'Npm';

export default Npm;
