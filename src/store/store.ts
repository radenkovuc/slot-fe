import {configureStore} from '@reduxjs/toolkit'

import {slotSlice} from "./slotSlice.js";

export const store = configureStore({
    reducer: slotSlice.reducer
})

export type RootState = ReturnType<typeof store.getState>
