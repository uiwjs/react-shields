import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface DownloadsProps extends InternalProps {
  /**
   * Github Downloads
   *
   * `/github/downloads/:user/:repo/total`
   * GitHub All Releases:  GitHub All Releases badge
   *
   * `/github/downloads/:user/:repo/:tag/total`
   * GitHub Releases:  GitHub Releases badge
   *
   * `/github/downloads-pre/:user/:repo/:tag/total`
   * GitHub Pre-Releases:  GitHub Pre-Releases badge
   *
   * `/github/downloads/:user/:repo/:tag/total`
   * GitHub Releases (by Release): GitHub Releases (by Release) badge
   *
   * `/github/downloads/:user/:repo/:tag/:path`
   * GitHub Releases (by Asset): GitHub Releases (by Asset) badge
   *
   * `/github/downloads-pre/:user/:repo/:tag/:path`
   * GitHub Pre-Releases (by Asset): GitHub Pre-Releases (by Asset) badge
   */
  type?: 'downloads' | 'downloads-pre';
  tag?: string;
  path?: string;
  total?: boolean;
}

const Downloads = React.forwardRef<HTMLImageElement, DownloadsProps>((props, ref) => {
  const {
    platform = 'github',
    type = 'downloads',
    base = 'https://img.shields.io',
    user,
    repo,
    tag,
    path,
    total = true,
    ...other
  } = props;
  const getUrl = () => {
    if (platform !== 'github' || !/^(downloads|downloads-pre)/.test(type || '')) return '';

    const baseData = [base, platform, type, user, repo];

    if (path && tag) {
      return [...baseData, tag, path].join('/');
    }
    if ((total && tag) || (type === 'downloads-pre' && tag && total)) {
      return [...baseData, tag, 'total'].join('/');
    }
    if (total) {
      return [...baseData, 'total'].join('/');
    }
    return '';
  };
  return <Internal imgSrc={getUrl()} ref={ref as React.ForwardedRef<HTMLImageElement>} {...other} />;
});

Downloads.displayName = 'Downloads';

export default Downloads;
