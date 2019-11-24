import React, { Component, ReactElement } from 'react';
import { BaseProps } from '../common/Base';
import Issues from './Issues';
import Size from './Size';
import Downloads from './Downloads';
import Activity from './Activity';
import Version from './Version';
import License from './License';
import Analysis from './Analysis';

export interface GithubProps extends BaseProps {}

export default class Github extends Component<GithubProps> {
  static Issues = Issues;
  static Size = Size;
  static Activity = Activity;
  static Downloads = Downloads;
  static Version = Version;
  static License = License;
  static Analysis = Analysis;
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