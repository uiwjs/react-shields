import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface SocialProps extends InternalProps {
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

const Social = React.forwardRef<HTMLImageElement, SocialProps>((props, ref) => {
  const { type = 'followers', platform = 'github', base = 'https://img.shields.io', user, repo, ...other } = props;
  const getUrl = () => {
    if (platform !== 'github') return '';
    if (type === 'followers') return [base, platform, type, user].join('/');
    return [base, platform, type, user, repo].join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Social.displayName = 'Social';

export default Social;
