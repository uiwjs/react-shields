import React from 'react';
import Base, { BaseProps } from '../common/Base';

export interface SizeProps extends BaseProps {
  /**
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
    super({ platform: 'github', type: 'languages' }, props);
    console.log('Size:', props);
  };

  getUrl = () => {
    const { type, platform, user, repo, base } = this.state;
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
    if (type === 'size') {
      return [base, platform, type, user, repo].join('/');
    }
    return '';
  }
}