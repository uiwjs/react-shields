import React from 'react';
import { Internal, type InternalProps } from '../common/Base';

export interface CodacyProps extends InternalProps {
  /**
   * Codacy Coverage
   *
   * `/codacy/coverage/:projectId`
   * Codacy coverage:  Codacy coverage badge
   *
   * `/codacy/coverage/:projectId/:branch`
   * Codacy branch coverage: Codacy branch coverage badge
   */
  projectId?: string;
  branch?: string;
}

const Codacy = React.forwardRef<HTMLImageElement, CodacyProps>((props, ref) => {
  const { platform = 'coveralls', base = 'https://img.shields.io', projectId, branch, ...other } = props;
  const getUrl = () => {
    if (platform !== 'coveralls') return '';
    if (branch) return [base, platform, projectId, branch].join('/');
    return [base, 'codacy/coverage', projectId].join('/');
  };
  return <Internal imgSrc={getUrl()} ref={ref} {...other} />;
});

Codacy.displayName = 'Codacy';

export default Codacy;
