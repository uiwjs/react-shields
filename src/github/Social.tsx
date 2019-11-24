import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface SocialProps extends BaseProps {
  /**
   * Github License
   * 
   * `/github/followers/:user?label=Follow`
   * GitHub followers: GitHub followers badge  
   * 
   * `/github/forks/:user/:repo?label=Fork`
   * GitHub forks: GitHub forks badge  
   * 
   * `/github/stars/:user/:repo?style=social`
   * GitHub stars: GitHub stars badge  
   * 
   * `/github/watchers/:user/:repo?label=Watch`
   * GitHub watchers:  GitHub watchers badge 
   */
  type?: 'followers' | 'forks' | 'stars' | 'watchers';
}

export default class Social extends Base<SocialProps> {
  constructor(props: SocialProps) {
    super({ platform: 'github', type: 'followers', ...props });
    console.log('~~~:', { platform: 'github', type: 'followers', ...props })
  };
  getUrl = () => {
    const { type, platform, user, repo, base } = this.state;
    if (platform !== 'github') return '';
    if(type === 'followers') return [base, platform, type, user].join('/');
    return [base, platform, type, user, repo].join('/');
  }
}