import { combineReducers } from '@reduxjs/toolkit';

import {
    appReducer,
    setAppData,
} from './App';
import {
    articlesReducer,
    setArticlesData,
} from './Articles';
import {
    commentsReducer,
    setCommentsData,
} from './Comments';

export const rootReducer = combineReducers({
    App: appReducer,
    Articles: articlesReducer,
    Comments: commentsReducer,
});

export { setAppData, setArticlesData, setCommentsData };
