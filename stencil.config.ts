import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'urbncomponents',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader'
    },
    {
      type: 'docs-readme',
      strict:true
    },
    {
      type: 'dist-hydrate-script'
    }
  ],
  plugins: [
    sass()
  ]
};
