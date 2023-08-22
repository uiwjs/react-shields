import React, { Component } from 'react';

export interface BaseProps {
  platform?: 'github' | 'coveralls' | 'npm';
  type?: string;
  user?: string;
  repo?: string;
  base?: string;
  href?: HTMLAnchorElement['href'];
  children?: React.ReactNode;
}

export interface BaseState extends BaseProps {}

export default class Base<T> extends Component<BaseProps & T, BaseState & T> {
  static defaultProps: BaseProps = {
    platform: 'github',
    base: 'https://img.shields.io',
  };
  constructor(props: BaseProps & T, defaultState: BaseProps & T, forceState?: BaseProps & T) {
    super(props);
    this.state = Object.assign({}, { ...defaultState, ...props }, forceState);
  }
  getUrl = () => '';
  render() {
    const { href } = this.state;
    if (href) {
      return (
        <a href={href}>
          {' '}
          <img alt="" src={this.getUrl()} />{' '}
        </a>
      );
    }
    return <img alt="" src={this.getUrl()} />;
  }
}
