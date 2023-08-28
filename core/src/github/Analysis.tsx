import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface AnalysisProps extends InternalProps {
  /**
   * Github Analysis
   *
   * `/github/languages/count/:user/:repo`
   * GitHub language count:  GitHub language count badge
   *
   * `/github/search/:user/:repo/:query`
   * GitHub search hit counter:  GitHub search hit counter badge
   *
   * `/github/languages/top/:user/:repo`
   * GitHub top language:  GitHub top language badge
   */
  type?: 'languages-count' | 'languages-top' | 'search';
  query?: string;
}

const Analysis = React.forwardRef<HTMLImageElement, AnalysisProps>((props, ref) => {
  const {
    platform = 'github',
    type = 'languages-count',
    base = 'https://img.shields.io',
    user,
    repo,
    query,
    ...other
  } = props;
  const getUrl = () => {
    let typePath = '';
    switch (type) {
      case 'languages-count':
        typePath = 'languages/count';
        break;
      case 'languages-top':
        typePath = 'languages/top';
        break;
      case 'search':
        typePath = 'search';
        break;
      default:
        break;
    }
    if (platform !== 'github' || !typePath) return '';
    const baseData = [base, platform, typePath, user, repo];
    if (query) {
      return [...baseData, query].join('/');
    }
    return baseData.join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Analysis.displayName = 'Analysis';

export default Analysis;
