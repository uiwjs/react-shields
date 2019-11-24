import React, { Component } from 'react';

export interface BaseProps {
  platform?: 'github';
  type?: string;
  label?: string;
  user?: string;
  repo?: string;
  base?: string;
}

export interface BaseState extends BaseProps {}

export default class Base<T> extends Component<BaseProps & T, BaseState & T> {
  static defaultProps: BaseProps = {
    platform: 'github',
    base: 'https://img.shields.io',
  }
  constructor(props: BaseProps & T, state: BaseProps = {}) {
    super(props);
    console.log( '---->', props, state)
    // this.state = Object.assign({}, {});
    this.state = Object.assign({}, { ...props, ...state});
  }
  getUrl = () => '';
  render() {
    return (
      <img src={this.getUrl()} />
    );
  }
}