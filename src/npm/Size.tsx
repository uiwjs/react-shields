import Base, { BaseProps} from '../common/Base';

export interface SizeProps extends BaseProps {
  format?: 'min' | 'minzip';
  packageName?: string;
  scope?: string;
  version?: string;
}

/**
 * Npm Size
 * 
 * `/bundlephobia/:format/:packageName`
 * npm bundle size:  npm bundle size badge 
 * 
 * `/bundlephobia/:format/:scope/:packageName`
 * npm bundle size (scoped): npm bundle size (scoped) badge  
 * 
 * `/bundlephobia/:format/:packageName/:version`
 * npm bundle size (version):  npm bundle size (version) badge 
 * 
 * `/bundlephobia/:format/:scope/:packageName/:version`
 * npm bundle size (scoped version): npm bundle size (scoped version) badge  
 * 
 */
export default class Size extends Base<SizeProps> {
  constructor(props: SizeProps) {
    super(props, { format: 'min' }, { platform: 'npm' });
  };
  getUrl = () => {
    const { base, type, platform, format, packageName, scope, version } = this.state;
    if (platform !== 'npm') return '';

    const baseData = [base, 'bundlephobia'];
    let url = '';

    if (packageName && format) {
      url = [...baseData, format, packageName].join('/');
    }
    if (packageName && format && scope) {
      url = [...baseData, format, scope, packageName].join('/');
    }
    if (packageName && format && scope && version) {
      url = [...baseData, format, scope, packageName, version].join('/');
    }
    if (packageName && format && version) {
      url = [...baseData, format, packageName, version].join('/');
    }

    return url;
  }
}