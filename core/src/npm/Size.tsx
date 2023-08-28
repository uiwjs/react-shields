import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface SizeProps extends InternalProps {
  format?: 'min' | 'minzip';
  packageName?: string;
  scope?: string;
  version?: string;
}

/**
 * Npm Size
 *
 * `/bundlephobia/:format/:packageName`
 * npm bundle size:  npm bundle size badge
 *
 * `/bundlephobia/:format/:scope/:packageName`
 * npm bundle size (scoped): npm bundle size (scoped) badge
 *
 * `/bundlephobia/:format/:packageName/:version`
 * npm bundle size (version):  npm bundle size (version) badge
 *
 * `/bundlephobia/:format/:scope/:packageName/:version`
 * npm bundle size (scoped version): npm bundle size (scoped version) badge
 *
 */
const Size = React.forwardRef<HTMLImageElement, SizeProps>((props, ref) => {
  const {
    base = 'https://img.shields.io',
    platform = 'npm',
    format = 'min',
    packageName,
    scope,
    version,
    ...other
  } = props;
  const getUrl = () => {
    if (platform !== 'npm') return '';

    const baseData = [base, 'bundlephobia'];
    let url = '';

    if (packageName && format) {
      url = [...baseData, format, packageName].join('/');
    }
    if (packageName && format && scope) {
      url = [...baseData, format, scope, packageName].join('/');
    }
    if (packageName && format && scope && version) {
      url = [...baseData, format, scope, packageName, version].join('/');
    }
    if (packageName && format && version) {
      url = [...baseData, format, packageName, version].join('/');
    }

    return url;
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Size.displayName = 'Size';

export default Size;
