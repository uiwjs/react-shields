import React, { ReactElement } from 'react';
import { InternalProps } from '../common/Base';

export interface ContainerProps extends InternalProps {}

export default function Container(props: ContainerProps) {
  return React.Children.toArray(props.children).map((child: React.ReactNode) => {
    if (!React.isValidElement(child)) return null;
    return React.cloneElement(child as ReactElement, { ...props, ...(child as React.ReactElement).props });
  });
}

Container.displayName = 'Container';
