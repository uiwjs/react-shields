import Container from '../common/Container';
import Version from './Version';
import Size from './Size';
import Downloads from './Downloads';

export default class Npm extends Container {
  static Version = Version;
  static Size = Size;
  static Downloads = Downloads;
}