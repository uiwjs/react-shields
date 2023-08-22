import Base, { BaseProps } from '../common/Base';

export interface AnalysisProps extends BaseProps {
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

export default class Analysis extends Base<AnalysisProps> {
  constructor(props: AnalysisProps) {
    super(props, { platform: 'github', type: 'languages-count' });
  }
  getUrl = () => {
    const { base, platform, type, user, repo, query } = this.state;
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
}
