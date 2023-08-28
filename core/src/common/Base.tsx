import React from 'react';
import type { AnchorHTMLAttributes, ImgHTMLAttributes } from 'react';

export interface InternalProps extends ImgHTMLAttributes<HTMLImageElement> {
  platform?: 'github' | 'coveralls' | 'npm';
  type?: string;
  user?: string;
  repo?: string;
  base?: string;
  imgSrc?: string;
  href?: HTMLAnchorElement['href'];
  children?: React.ReactNode;
  anchor?: Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;
}

export const Internal = React.forwardRef<HTMLImageElement, InternalProps>((props, ref) => {
  const { href, anchor = {}, imgSrc, platform, type, user, repo, base, children, ...other } = props;
  if (href) {
    return (
      <a {...anchor} href={href}>
        <img alt="" ref={ref} src={imgSrc} {...other} />
      </a>
    );
  }
  return <img alt="" ref={ref} src={imgSrc} {...other} />;
});

Internal.displayName = 'Internal';
