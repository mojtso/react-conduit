import { IConfig, createOvermind } from 'overmind';
import { merge, namespaced } from 'overmind/config';
import { createHook } from 'overmind-react';

import * as api from '../api';
import * as auth from './auth';
import * as profile from './profile';

const config = merge(
  {
    effects: api,
  },
  namespaced({ auth, profile }),
);

declare module 'overmind' {
  interface Config extends IConfig<typeof config> {}
}

export const overmind = createOvermind(config);

export const useOvermind = createHook<typeof config>();
