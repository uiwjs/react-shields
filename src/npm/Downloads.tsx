import Base, { BaseProps} from '../common/Base';

export interface DownloadProps extends BaseProps {
  interval?: 'dw' | 'dm' | 'dy' | 'dt';
  packageName?: string;
  scope?: string;
}

/**
 * Npm Size
 * 
 * `/npm/:interval/:packageName`
 * npm downloads: npm downloads per interval badge  
 * 
 * `/npm/:interval/:scope/:packageName`
 * npm downloads (scoped): npm downloads per interval (scoped version) badge  
 * 
 */
export default class Downloads extends Base<DownloadProps> {
  constructor(props: DownloadProps) {
    super(props, { interval: 'dm' }, { platform: 'npm' });
  };
  getUrl = () => {
    const { base, platform, interval, packageName, scope } = this.state;
    if (platform !== 'npm' || !packageName) return '';

    const url = [base, 'npm', interval];

    if (scope) {
      url.push(scope);
    }

    url.push(packageName);

    return url.join('/');
  }
}