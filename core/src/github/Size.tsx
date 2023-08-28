import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface SizeProps extends InternalProps {
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

export const Size = React.forwardRef<HTMLImageElement, SizeProps>((props, ref) => {
  const {
    type = 'languages',
    platform = 'github',
    base = 'https://img.shields.io',
    user,
    repo,
    path,
    ...other
  } = props;
  const getUrl = () => {
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
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Size.displayName = 'Size';
