import React from 'react';
import Base, { BaseProps} from '../common/Base';

export interface IssueProps extends BaseProps {
  /**
   * /github/:issueKind/detail/:property/:user/:repo/:number
   * /github/issues/:user/:repo
   * /github/issues-raw/:user/:repo
   * /github/issues/:user/:repo/:label
   * /github/issues-raw/:user/:repo/:label
   * /github/issues-closed/:user/:repo
   * /github/issues-closed-raw/:user/:repo
   * /github/issues-pr/:user/:repo
   * /github/issues-pr-raw/:user/:repo
   * /github/issues-pr-closed/:user/:repo
   * /github/issues-pr-closed-raw/:user/:repo
   * /github/issues-pr/:user/:repo/:label
   * /github/issues-pr-raw/:user/:repo/:label
   * /github/labels/:user/:repo/:name
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
}

export default class Issue extends Base<IssueProps> {
  constructor(props: IssueProps) {
    super({ platform: 'github', type: 'issues' }, props);
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