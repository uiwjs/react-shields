import React, { Component } from 'react';

export interface BaseProps {
  platform?: 'github';
  type?: string;
  user?: string;
  repo?: string;
  base?: string;
  href?: HTMLAnchorElement['href'];
}

export interface BaseState extends BaseProps {}

export default class Base<T> extends Component<BaseProps & T, BaseState & T> {
  static defaultProps: BaseProps = {
    platform: 'github',
    base: 'https://img.shields.io',
  }
  constructor(props: BaseProps & T, state: BaseProps & T) {
    super(props);
    this.state = Object.assign({}, { ...state,  ...props });
  }
  getUrl = () => '';
  render() {
    const { href } = this.state;
    if (href) {
      return <a href={href}> <img src={this.getUrl()} /> </a>;
    }
    return <img src={this.getUrl()} />;
  }
}