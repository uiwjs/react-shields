import React, { Component, ReactElement } from 'react';
import { BaseProps } from '../common/Base';

export interface ContainerProps extends BaseProps {}

export default class Container extends Component<ContainerProps> {
  render() {
    return (
      <>
        {React.Children.toArray(this.props.children).map((child: React.ReactNode) => {
          if (!React.isValidElement(child)) return null;
          return React.cloneElement(child as ReactElement, { ...this.props, ...(child as React.ReactElement).props });
        })}
      </>
    );
  }
}
