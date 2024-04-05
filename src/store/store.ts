import {configureStore} from '@reduxjs/toolkit'
import {TypedUseSelectorHook, useSelector} from "react-redux";

import {slotSlice} from "./slotSlice";

export const store = configureStore({
    reducer: slotSlice.reducer
})

type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

