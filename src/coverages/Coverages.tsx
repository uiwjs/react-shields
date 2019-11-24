import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface CoveragesProps extends BaseProps {
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

export default class Coverages extends Base<CoveragesProps> {
  constructor(props: CoveragesProps) {
    super(props, { type: 'github' }, { platform: 'coveralls' });
  };
  getUrl = () => {
    const { type, platform, user, repo, base } = this.state;
    if (platform !== 'coveralls') return '';
    return [base, platform, type, user, repo].join('/');
  }
}