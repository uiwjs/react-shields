import Container, { ContainerProps } from '../common/Container';
import Version from './Version';
import Size from './Size';
import Downloads from './Downloads';

type NpmComponent = typeof Container & {
  Version: typeof Version;
  Size: typeof Size;
  Downloads: typeof Downloads;
};

const Npm = (props: ContainerProps) => (<Container {...props} />) as unknown as NpmComponent;

Npm.Version = Version;
Npm.Size = Size;
Npm.Downloads = Downloads;
Npm.displayName = 'Npm';

export default Npm;
