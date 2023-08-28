import Container, { ContainerProps } from '../common/Container';
import { Issues } from './Issues';
import { Size } from './Size';
import { License } from './License';
import Downloads from './Downloads';
import Activity from './Activity';
import Version from './Version';
import Analysis from './Analysis';
import Social from './Social';

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

const Github = (props: ContainerProps) => (<Container {...props} />) as unknown as GithubComponent;

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
