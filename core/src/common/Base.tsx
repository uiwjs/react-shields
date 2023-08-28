import React, { Component } from 'react';
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react';

export interface BaseProps extends ImgHTMLAttributes<HTMLImageElement> {
  platform?: 'github' | 'coveralls' | 'npm';
  type?: string;
  user?: string;
  repo?: string;
  base?: string;
  href?: HTMLAnchorElement['href'];
  children?: React.ReactNode;
  anchor?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
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
  componentDidUpdate(prevProps: Readonly<BaseProps & T>, prevState: Readonly<BaseState & T>, snapshot?: any): void {
    if (prevProps !== this.props) {
      this.setState({ ...this.state, ...this.props });
    }
  }
  getUrl = () => '';
  render() {
    const { href, anchor, ...other } = this.state;
    if (href) {
      return (
        <a {...anchor} href={href}>
          <img alt="" src={this.getUrl()} {...other} />
        </a>
      );
    }
    return <img alt="" src={this.getUrl()} {...other} />;
  }
}
