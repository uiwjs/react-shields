import Base, { BaseProps} from '../common/Base';

export interface CodacyProps extends BaseProps {
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

export default class Codacy extends Base<CodacyProps> {
  constructor(props: CodacyProps) {
    super(props, { }, { platform: 'coveralls' });
  };
  getUrl = () => {
    const { base, platform, projectId, branch } = this.state;
    if (platform !== 'coveralls') return '';
    if (branch) return [base, platform, projectId, branch].join('/');
    return [base, 'codacy/coverage', projectId].join('/');
  }
}