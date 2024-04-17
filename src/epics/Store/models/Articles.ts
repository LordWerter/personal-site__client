import { Article } from 'types';

import { createSlice } from '@reduxjs/toolkit';

export const initialState: {
    items: Article[] | null,
} = {
    items: null,
};

export const articlesSlice = createSlice({
    name: 'Articles',
    initialState,
    reducers: {
        setArticlesData: (state, action) => {
            const newState = {
                ...state,
                ...action.payload,
            };

            return newState;
        },
    },
});

export const { setArticlesData } = articlesSlice.actions;
export const articlesReducer = articlesSlice.reducer;
export default articlesSlice;
