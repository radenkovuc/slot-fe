import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {GameStatus} from "../domain";
import {getRandomArray} from "../helpers";

export interface CounterState {
    slotOrder: number[]
    gameStatus: GameStatus
    finalSpins: number[]
    isSpinning: boolean
}

const initialState: CounterState = {
    slotOrder: getRandomArray(9),
    gameStatus: GameStatus.NO_MATCH,
    finalSpins: [],
    isSpinning: false
}

export const slotSlice = createSlice({
    name: 'slot',
    initialState,
    reducers: {
        finishSpinning: (state, action: PayloadAction<number>) => {
            const updatedSpins = [...state.finalSpins, action.payload]
            state.finalSpins = updatedSpins

            if (state.finalSpins.length === 3) {
                if (updatedSpins[0] === updatedSpins[1]) {
                    if (updatedSpins[2] === updatedSpins[1]) {
                        state.gameStatus = GameStatus.THREE_FIELDS_MATCH
                    } else {
                        state.gameStatus = GameStatus.TWO_FIELDS_MATCH
                    }
                } else {
                    state.gameStatus = GameStatus.NO_MATCH
                }
                state.isSpinning = false
            }
        },
        startSpinning: (state, action: PayloadAction<number[]>) => {
            state.slotOrder = action.payload
            state.finalSpins = []
            state.isSpinning = true
            state.gameStatus = GameStatus.NO_MATCH
        }
    },
})

export const {finishSpinning, startSpinning} = slotSlice.actions
