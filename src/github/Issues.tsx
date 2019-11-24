import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface IssueProps extends BaseProps {
  /**
   * Github Issue
   * 
   * `/github/:issueKind/detail/:property/:user/:repo/:number`  
   * GitHub issue/pull request detail: GitHub issue/pull request detail badge  
   * 
   * `/github/issues/:user/:repo`  
   * GitHub issues:  GitHub issues badge 
   * 
   * `/github/issues-raw/:user/:repo`  
   * GitHub issues:  GitHub issues badge 
   * 
   * `/github/issues/:user/:repo/:label`  
   * GitHub issues by-label: GitHub issues by-label badge  
   * 
   * `/github/issues-raw/:user/:repo/:label`  
   * GitHub issues by-label: GitHub issues by-label badge  
   * 
   * `/github/issues-closed/:user/:repo`  
   * GitHub closed issues: GitHub closed issues badge  
   * 
   * `/github/issues-closed-raw/:user/:repo`  
   * GitHub closed issues: GitHub closed issues badge  
   * 
   * `/github/issues-pr/:user/:repo`  
   * GitHub pull requests: GitHub pull requests badge  
   * 
   * `/github/issues-pr-raw/:user/:repo`  
   * GitHub pull requests: GitHub pull requests badge  
   * 
   * `/github/issues-pr-closed/:user/:repo`  
   * GitHub closed pull requests:  GitHub closed pull requests badge 
   * 
   * `/github/issues-pr-closed-raw/:user/:repo`  
   * GitHub closed pull requests:  GitHub closed pull requests badge 
   * 
   * `/github/issues-pr/:user/:repo/:label`  
   * GitHub pull requests by-label:  GitHub pull requests by-label badge 
   * 
   * `/github/issues-pr-raw/:user/:repo/:label`  
   * GitHub pull requests by-label:  GitHub pull requests by-label badge 
   * 
   * `/github/labels/:user/:repo/:name`  
   * GitHub labels:  GitHub labels badge 
   */
  type?: 'issueKind' | 'issues' | 'issues-raw' | 'issues-closed'
    | 'issues-closed-raw' | 'issues-pr' | 'issues-pr-raw' 
    | 'issues-pr-closed' | 'issues-pr-closed-raw'
    | 'languages';
  /**
   * /github/:issueKind/detail/:property/:user/:repo/:number
   */
  property?: string;
  /**
   * /github/:issueKind/detail/:property/:user/:repo/:number
   */
  number?: string;
  label?: string;
}

export default class Issue extends Base<IssueProps> {
  constructor(props: IssueProps) {
    super(props, { platform: 'github', type: 'issues' });
  };
  getUrl = () => {
    const { type, platform, property, user, repo, label, base } = this.state;
    if (platform !== 'github') return '';
    if (type === 'issues' || /^issues\-(raw|closed|closed\-raw|pr|pr\-raw|pr\-closed|pr\-closed\-raw)/.test(type!)) {
      if(label && (type === 'issues' || /^issues\-(raw|pr|pr\-raw)/.test(type || ''))) {
        return [base, platform, type, user, repo, label].join('/');
      }
      return [base, platform, type, user, repo].join('/');
    }
    if(type === 'issueKind') {
      return [base, platform, type, 'detail', property, user, repo].join('/');
    }
    return '';
  }
}