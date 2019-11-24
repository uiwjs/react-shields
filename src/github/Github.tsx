import React, { Component, ReactElement } from 'react';
import Issues from './Issues';
import Size from './Size';
import Downloads from './Downloads';
import Activity from './Activity';
import Version from './Version';
import { BaseProps } from '../common/Base';

export interface GithubProps extends BaseProps {}

export default class Github extends Component<GithubProps> {
  static Issues = Issues;
  static Size = Size;
  static Activity = Activity;
  static Downloads = Downloads;
  static Version = Version;
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