import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface LicenseProps extends BaseProps {
  /**
   * Code Coverage
   * 
   * `/coveralls/:vcsType/:user/:repo`
   * Coveralls github: Coveralls github badge  
   * 
   * `/coveralls/:vcsType/:user/:repo/:branch`
   * Coveralls github branch:  Coveralls github branch badge 
   * 
   * `/coveralls/:vcsType/:user/:repo`
   * Coveralls bitbucket:  Coveralls bitbucket badge 
   * 
   * `/coveralls/:vcsType/:user/:repo/:branch`
   * Coveralls bitbucket branch: Coveralls bitbucket branch badge  
   */
  type?: string;
  branch?: string;
}

export default class License extends Base<LicenseProps> {
  constructor(props: LicenseProps) {
    super({...props}, { type: 'github' }, { platform: 'coveralls' });
  };
  getUrl = () => {
    const { type, platform, user, repo, base } = this.state;
    if (platform !== 'coveralls') return '';
    return [base, platform, type, user, repo].join('/');
  }
}