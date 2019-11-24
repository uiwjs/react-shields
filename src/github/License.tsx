import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface LicenseProps extends BaseProps {
  /**
   * Github License
   * 
   * `/github/license/:user/:repo`  
   * GitHub: GitHub badge  
   */
  type?: 'license';
}

export default class License extends Base<LicenseProps> {
  constructor(props: LicenseProps) {
    super(props, { platform: 'github', type: 'license' });
  };
  getUrl = () => {
    const { type, platform, user, repo, base } = this.state;
    if (platform !== 'github') return '';
    return [base, platform, type, user, repo].join('/');
  }
}