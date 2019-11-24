import React from 'react';
import Base, { BaseProps } from '../common/Base';

export interface VersionProps extends BaseProps {
  /**
   * Github Version
   * 
   * `/github/go-mod/go-version/:user/:repo`
   * GitHub go.mod Go version: GitHub go.mod Go version badge  
   * 
   * `/github/go-mod/go-version/:user/:repo/:branch`
   * GitHub go.mod Go version (branch):  GitHub go.mod Go version (branch) badge 
   * 
   * `/github/go-mod/go-version/:user/:repo?filename=src%2Fgo.mod`
   * GitHub go.mod Go version (subfolder of monorepo): GitHub go.mod Go version (subfolder of monorepo) badge  
   * 
   * `/github/go-mod/go-version/:user/:repo/:branch?filename=src%2Fgo.mod`
   * GitHub go.mod Go version (branch & subfolder of monorepo):  GitHub go.mod Go version (branch & subfolder of monorepo) badge 
   * 
   * `/github/manifest-json/v/:user/:repo`
   * GitHub manifest version:  GitHub manifest version badge 
   * 
   * `/github/manifest-json/v/:user/:repo/:branch`
   * GitHub manifest version:  GitHub manifest version badge 
   * 
   * `/github/package-json/v/:user/:repo`
   * GitHub package.json version:  GitHub package.json version badge 
   * 
   * `/github/package-json/v/:user/:repo/:branch`
   * GitHub package.json version (branch): GitHub package.json version (branch) badge  
   * 
   * `/github/v/release/:user/:repo`
   * GitHub release (latest by date):  GitHub release (latest by date) badge 
   * 
   * `/github/v/release/:user/:repo?include_prereleases`
   * GitHub release (latest by date including pre-releases): GitHub release (latest by date including pre-releases) badge  
   * 
   * `/github/v/release/:user/:repo?sort=semver`
   * GitHub release (latest SemVer): GitHub release (latest SemVer) badge  
   * 
   * `/github/v/release/:user/:repo?include_prereleases&sort=semver`
   * GitHub release (latest SemVer including pre-releases):  GitHub release (latest SemVer including pre-releases) badge 
   * 
   * `/github/v/tag/:user/:repo`
   * GitHub tag (latest by date):  GitHub tag (latest by date) badge 
   * 
   * `/github/v/tag/:user/:repo?sort=semver`
   * GitHub tag (latest SemVer): GitHub tag (latest SemVer) badge  
   * 
   * `/github/v/tag/:user/:repo?include_prereleases&sort=semver`
   * GitHub tag (latest SemVer pre-release): GitHub tag (latest SemVer pre-release) badge  
   */
  type?: 'version-release' | 'version-tag' | 'package-json' | 'manifest-json' | 'go-mod';
  branch?: string;
}

export default class Version extends Base<VersionProps> {
  constructor(props: VersionProps) {
    super(props, { platform: 'github', type: 'version-release' });
  };

  getUrl = () => {
    const { type, platform, user, repo, base, branch } = this.state;
    let typePath = '';
    switch (type) {
      case 'version-release': typePath = 'v/release';break;
      case 'version-tag': typePath = 'v/tag';break;
      case 'package-json': typePath = 'package-json/v';break;
      case 'manifest-json': typePath = 'manifest-json/v';break;
      case 'go-mod': typePath = 'go-mod/go-version';break;
      default:break;
    }
    if (platform !== 'github' || !typePath) return '';
    const baseData = [base, platform, typePath, user, repo];
    if (/(go\-mod|manifest\-json|package\-json)/.test(type || '') && branch) {
      return [...baseData, branch].join('/');
    }
    return baseData.join('/');
  }
}