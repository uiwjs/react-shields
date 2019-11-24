import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface ActivityProps extends BaseProps {
  /**
   * `/github/commit-activity/:interval/:user/:repo`
   * GitHub commit activity: GitHub commit activity badge  
   * 
   * `/github/commits-since/:user/:repo/:version/:branch*`
   * GitHub commits since tagged version:  GitHub commits since tagged version badge 
   * 
   * `/github/commits-since/:user/:repo/:version/:branch*`
   * GitHub commits since tagged version (branch): GitHub commits since tagged version (branch) badge  
   * 
   * `/github/commits-since/:user/:repo/:version/:branch*`
   * GitHub commits since latest release:  GitHub commits since latest release badge 
   * 
   * `/github/commits-since/:user/:repo/:version/:branch*`
   * GitHub commits since latest release (branch): GitHub commits since latest release (branch) badge  
   * 
   * `/github/:variant/:user/:repo`
   * GitHub contributors:  GitHub contributors badge 
   * 
   * `/github/last-commit/:user/:repo`
   * GitHub last commit: GitHub last commit badge  
   * 
   * `/github/last-commit/:user/:repo/:branch`
   * GitHub last commit (branch):  GitHub last commit (branch) badge 
   * 
   * `/github/release-date/:user/:repo`
   * GitHub Release Date:  GitHub Release Date badge 
   * 
   * `/github/release-date-pre/:user/:repo`
   * GitHub (Pre-)Release Date:  GitHub (Pre-)Release Date badge 
   */
  type?: 'commits-since' | 'variant' | 'last-commit' | 'release-date' | 'release-date-pre';
  variant?: string;
  version?: string;
  branch?: string;
}

export default class Activity extends Base<ActivityProps> {
  constructor(props: ActivityProps) {
    super({ platform: 'github', type: 'commits-since' }, props);
  };
  getUrl = () => {
    const { type, platform, user, repo, base, variant, version, branch } = this.state;
    if (platform !== 'github') return '';
    if (type === 'commits-since') {
      return [base, platform, type, user, repo, version, branch].join('/');
    }
    if (type === 'variant' && variant) {
      return [base, platform, type, variant, user, repo].join('/');
    }
    if (type === 'last-commit') {
      return branch ? [base, platform, type, variant, user, repo, branch].join('/') : [base, platform, type, variant, user, repo].join('/');
    }
    if (type && /^release\-(date|date\-pre)/.test(type)) {
      return [base, platform, type, user, repo].join('/');
    }
    return '';
  }
}