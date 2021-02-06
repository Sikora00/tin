import { IEnvironment } from '@tin/xplat/core';
import { deepMerge } from '@tin/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentDev = deepMerge(environmentBase, <IEnvironment>{
  // customizations here...
});
