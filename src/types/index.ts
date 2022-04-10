import { Paginated } from '@feathersjs/feathers';
import { Resource } from './resource';

export interface App extends Resource {
  name: string;
  type: 'node' | 'react';
  repo: string;
  branch: string;
  port: number;
  envVars?: EnvVar[];
}

export type PaginatedApp = Paginated<App>;

export interface EnvVar extends Resource {
  appId: string;
  envVar: string;
}

export type PaginatedEnvVar = Paginated<EnvVar>;
