import {Container, Sprite, Text} from '@pixi/react';
import {TextStyle} from "pixi.js";
import {useDispatch, useSelector} from "react-redux";

import {useGameTextures} from "../hooks/GameTextures";
import {RootState} from "../store/store";
import {startSpinning} from "../store/slotSlice.js";

import {getRandomArray} from "../helpers/Commons";

const textStyle = new TextStyle({
    fontSize: 30,
    fontWeight: '400',
    fill: ['blue', '#000000'],
})

export const Button = () => {
    const isSpinning = useSelector((state: RootState) => state.isSpinning)
    const {button} = useGameTextures()
    const dispatch = useDispatch()

    if (!button) {
        return null
    }

    const onClick = () => {
        dispatch(startSpinning(getRandomArray(9)))
    }

    return <Container y={580} x={400} height={400} width={800}>
        <Sprite texture={button} anchor={0.5} y={0} width={200} height={40}
                alpha={isSpinning ? 0.5 : 1}
                eventMode={isSpinning ? 'none' : 'static'}
                onclick={onClick}
                cursor='pointer'/>
        <Container x={0} y={0} width={300}>
            <Text text={"SPIN"} anchor={0.5} style={textStyle}/>
        </Container>
    </Container>
};