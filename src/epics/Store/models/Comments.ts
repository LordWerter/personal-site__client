import { Comment } from 'types';

import { createSlice } from '@reduxjs/toolkit';

export const initialState: {
    items: Comment[] | null,
} = {
    items: null,
};

export const commentsSlice = createSlice({
    name: 'Comments',
    initialState,
    reducers: {
        setCommentsData: (state, action) => {
            const newState = {
                ...state,
                ...action.payload,
            };

            return newState;
        },
    },
});

export const { setCommentsData } = commentsSlice.actions;
export const commentsReducer = commentsSlice.reducer;
export default commentsSlice;
