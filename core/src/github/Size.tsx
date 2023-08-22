import Base, { BaseProps } from '../common/Base';

export interface SizeProps extends BaseProps {
  /**
   * Github Size
   *
   * /github/languages/code-size/:user/:repo
   * /github/repo-size/:user/:repo
   * /github/size/:user/:repo/:path*
   */
  type?: 'languages' | 'repo-size' | 'size';
  /**
   * GitHub file size in bytes
   * build/phaser-craft.min.js
   */
  path?: string;
}

export default class Size extends Base<SizeProps> {
  constructor(props: SizeProps) {
    super(props, { platform: 'github', type: 'languages' });
  }

  getUrl = () => {
    const { type, platform, user, repo, base, path } = this.state;
    if (platform !== 'github') return '';
    /**
     * /github/languages/code-size/:user/:repo
     */
    if (type === 'languages') {
      return [base, platform, type, 'code-size', user, repo].join('/');
    }
    /**
     * /github/repo-size/:user/:repo
     */
    if (type === 'repo-size') {
      return [base, platform, type, user, repo].join('/');
    }
    /**
     * /github/size/:user/:repo/:path*
     */
    if (type === 'size' && path) {
      return [base, platform, type, user, repo, path].join('/');
    }
    return '';
  };
}
