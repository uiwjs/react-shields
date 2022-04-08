import Base, { BaseProps} from '../common/Base';

/**
 * NPM Version
 * 
 * `/npm/v/:packageName`  
 * npm:  npm badge 
 * 
 * `/npm/v/:scope/:packageName`  
 * npm (scoped): npm (scoped) badge  
 * 
 * `/npm/v/:packageName/:tag`  
 * npm (tag):  npm (tag) badge 
 * 
 * `/npm/v/:packageName/:tag?registry_uri=https%3A%2F%2Fregistry.npmjs.com`  
 * npm (custom registry):  npm (custom registry) badge 
 * 
 * `/npm/v/:scope/:packageName/:tag`  
 * npm (scoped with tag):  npm (scoped with tag) badge 
 * 
 * `/npm/dependency-version/:packageName/peer/:dependency`
 * npm peer dependency version:  npm peer dependency version badge 
 * 
 * `/npm/dependency-version/:scope?/:packageName/dev/:dependencyScope?/:dependency`
 * npm peer dependency version (scoped): npm peer dependency version (scoped) badge  
 * 
 * `/npm/dependency-version/:packageName/dev/:dependency`
 * npm dev dependency version: npm dev dependency version badge  
 * 
 * `/npm/dependency-version/:scope?/:packageName/dev/:dependencyScope?/:dependency`
 * npm dev dependency version (scoped):  npm dev dependency version (scoped) badge 
 * 
 * `/npm/dependency-version/:packageName/:dependency`
 * npm (prod) dependency version:  npm (prod) dependency version badge 
 * 
 * `/npm/dependency-version/:scope?/:packageName/:dependencyScope?/:dependency`
 * npm (prod) dependency version (scoped): npm (prod) dependency version (scoped) badge  
 * 
 * `/npm/types/:packageName`
 * npm type definitions: npm type definitions badge  
 */
export interface VersionProps extends BaseProps {
  type?: 'version' | 'peer-dependency' | 'dev-dependency';
  registryUri?: string;
  packageName?: string;
  dependency?: string;
  scope?: string;
  dependencyScope?: string;
  version?: string;
}

export default class Version extends Base<VersionProps> {
  constructor(props: VersionProps) {
    super(props, { type: 'version' }, { platform: 'npm' });
  };
  getUrl = () => {
    const { base, platform, type, scope, packageName, dependency, dependencyScope, version, registryUri  } = this.state;
    if (platform !== 'npm' || !packageName) return '';

    let url = '';
    const baseData = [base, platform];

    if (type === 'version' && packageName) {
      baseData.push('v');
      if (scope) {
        baseData.push(scope);
      }
      baseData.push(packageName);
      if (version) {
        baseData.push(version);
      }
      url = baseData.join('/');
      if (registryUri) {
        url = `${url}?registry_uri=${registryUri}`;
      }
    } else if (type === 'peer-dependency' && packageName && dependency) {
      baseData.push('dependency-version');
      if (scope) {
        baseData.push(scope);
      }
      url = [...baseData, packageName, 'peer', dependency].join('/');
    } else if (type === 'dev-dependency' && packageName && dependency) {
      baseData.push('dependency-version');
      if (scope) {
        baseData.push(scope);
      }
      baseData.concat([packageName, 'dev']);
      if (dependencyScope) {
        baseData.push(dependencyScope);
      }
      baseData.push(dependency);
      url = baseData.join('/');
    } else if (packageName && dependency) {
      baseData.concat([packageName, dependency]);
      url = baseData.join('/');
    }

    return url;
  }
}