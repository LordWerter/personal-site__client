import { store } from 'epics/Store';

export type RootState = ReturnType<typeof store.getState>;
export type { SliceAction, SliceActionPayload } from './Slice';
export type { App, Article, Comment } from './slices';
