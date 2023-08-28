import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface CoveragesProps extends InternalProps {
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

const Coverages = React.forwardRef<HTMLImageElement, CoveragesProps>((props, ref) => {
  const { type = 'github', platform = 'coveralls', base = 'https://img.shields.io', user, repo, ...other } = props;
  const getUrl = () => {
    if (platform !== 'coveralls') return '';
    return [base, platform, type, user, repo].join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Coverages.displayName = 'Coverages';

export default Coverages;
