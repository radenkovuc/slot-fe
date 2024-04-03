import {createSlice, PayloadAction} from '@reduxjs/toolkit'

import {WinnerType} from "../domain/WinnerType";

import {getRandomArray} from "../helpers/Commons";

export interface CounterState {
    slotOrder: number[]
    winnerType: WinnerType
    finalSpins: number[]
    isSpinning: boolean
}

const initialState: CounterState = {
    slotOrder: getRandomArray(9),
    winnerType: WinnerType.NONE,
    finalSpins: [],
    isSpinning: true
}

export const textureSlice = createSlice({
    name: 'slot',
    initialState,
    reducers: {
        setFinalSpin: (state, action: PayloadAction<number>) => {
            const updatedSpins = [...state.finalSpins, action.payload]
            state.finalSpins = updatedSpins

            if (state.finalSpins.length === 3) {
                if (updatedSpins[0] === updatedSpins[1]) {
                    if (updatedSpins[2] === updatedSpins[1]) {
                        state.winnerType = WinnerType.THREE_FIELDS
                    } else {
                        state.winnerType = WinnerType.TWO_FIELD
                    }
                } else {
                    state.winnerType = WinnerType.NONE
                }
                state.isSpinning = false
            }
        },
        startSpinning: (state, action: PayloadAction<number[]>) => {
            state.slotOrder = action.payload
            state.finalSpins = []
            state.isSpinning = false
            state.winnerType = WinnerType.NONE
        }
    },
})

export const {setFinalSpin, startSpinning} = textureSlice.actions
