import {configureStore} from '@reduxjs/toolkit'

import {slotSlice} from "./slotSlice.js";
import {textureSlice} from "./textureSlice.js";

export const store = configureStore({
    reducer: {
        slot: slotSlice.reducer,
        texture: textureSlice.reducer
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch