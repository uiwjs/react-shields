import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface DownloadProps extends InternalProps {
  interval?: 'dw' | 'dm' | 'dy' | 'dt';
  packageName?: string;
  scope?: string;
}

/**
 * Npm Downloads
 *
 * `/npm/:interval/:packageName`
 * npm downloads: npm downloads per interval badge
 *
 * `/npm/:interval/:scope/:packageName`
 * npm downloads (scoped): npm downloads per interval (scoped version) badge
 *
 */
const Downloads = React.forwardRef<HTMLImageElement, DownloadProps>((props, ref) => {
  const { base = 'https://img.shields.io', platform = 'npm', interval = 'dm', packageName, scope, ...other } = props;
  const getUrl = () => {
    if (platform !== 'npm' || !packageName) return '';

    const url = [base, 'npm', interval];

    if (scope) {
      url.push(scope);
    }

    url.push(packageName);

    return url.join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Downloads.displayName = 'Downloads';

export default Downloads;
