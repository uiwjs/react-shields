import React from 'react';
import Container from '../common/Container';
import Issues from './Issues';
import Size from './Size';
import Downloads from './Downloads';
import Activity from './Activity';
import Version from './Version';
import License from './License';
import Analysis from './Analysis';
import Social from './Social';

export default class Github extends Container {
  static Issues = Issues;
  static Size = Size;
  static Activity = Activity;
  static Downloads = Downloads;
  static Version = Version;
  static License = License;
  static Analysis = Analysis;
  static Social = Social;
}