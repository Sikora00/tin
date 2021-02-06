import { IEnvironment } from '@tin/xplat/core';
import { deepMerge } from '@tin/xplat/utils';
import { environmentBase } from './environment.base';

export const environmentProd = deepMerge(environmentBase, <IEnvironment>{
  production: true,
  // customizations here...
});
