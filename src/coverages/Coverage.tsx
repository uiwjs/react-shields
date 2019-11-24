import React, { Component, ReactElement } from 'react';
import { BaseProps } from '../common/Base';
import Coverages from './Coverages';
import Codacy from './Codacy';

export interface CoverageProps extends BaseProps {}

export default class Coverage extends Component<CoverageProps> {
  static Coverages = Coverages;
  static Codacy = Codacy;
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