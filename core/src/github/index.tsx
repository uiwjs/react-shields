import Container, { ContainerProps } from '../common/Container';
import { Issues } from './Issues';
import { Size } from './Size';
import { License } from './License';
import Downloads from './Downloads';
import Activity from './Activity';
import Version from './Version';
import Analysis from './Analysis';
import Social from './Social';

const Github = (props: ContainerProps) => <Container {...props} />;

Github.Issues = Issues;
Github.Size = Size;
Github.Downloads = Downloads;
Github.License = License;
Github.Activity = Activity;
Github.Analysis = Analysis;
Github.Version = Version;
Github.Social = Social;
Github.displayName = 'Github';

export default Github;
