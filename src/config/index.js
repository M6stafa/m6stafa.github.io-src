import deepmerge from 'deepmerge';
import prodConfig from './prod';
import devConfig from './dev';

const config = process.env.DEV ? deepmerge(prodConfig, devConfig) : prodConfig;

export default config;
