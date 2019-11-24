import React, { Component, ReactElement } from 'react';
import { BaseProps } from '../common/Base';
import Coverages from './Coverages';

export interface GithubProps extends BaseProps {}

export default class Github extends Component<GithubProps> {
  static Coverages = Coverages;
  render() {
    return (
      <>
        {React.Children.toArray(this.props.children).map((child: React.ReactNode) => {
          if (!React.isValidElement(child)) return;
          return React.cloneElement(child as ReactElement, { ...this.props, ...(child as React.ReactElement).props });
        })}
      </>
    );
  }
}