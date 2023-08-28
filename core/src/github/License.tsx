import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface LicenseProps extends InternalProps {
  /**
   * Github License
   *
   * `/github/license/:user/:repo`
   * GitHub: GitHub badge
   */
  type?: 'license';
}

export const License = React.forwardRef<HTMLImageElement, LicenseProps>((props, ref) => {
  const { platform = 'github', type = 'license', base = 'https://img.shields.io', user, repo, ...other } = props;
  const getUrl = () => {
    if (platform !== 'github') return '';
    return [base, platform, type, user, repo].join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

License.displayName = 'License';
