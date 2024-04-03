import {Container, Sprite, Text} from '@pixi/react';
import {TextStyle} from "pixi.js";
import {useSelector} from "react-redux";

import {useGameTextures} from "../hooks/GameTextures";

import {RootState} from "../store/store";
import {WinnerType} from "../domain/WinnerType";

const SMALL_PRICE = "456.78"
const BIG_PRICE = "1,123,456.78"

const textStyle = new TextStyle({
    fontSize: 34,
    fontWeight: '400',
    align: 'right',
    fill: ['#ffffff', '#00ff99'],
})

export const Jackpot = () => {
    const winnerType = useSelector((state: RootState) => state.winnerType)
    const {jackpot} = useGameTextures()

    if (!jackpot || winnerType === WinnerType.NONE) {
        return null
    }

    return <>
        <Sprite texture={jackpot} y={-80} width={800} height={400}/>
        <Container x={400} y={160} width={300}>
            <Text text={winnerType === WinnerType.TWO_FIELD ? SMALL_PRICE : BIG_PRICE} anchor={0.5} style={textStyle}/>
        </Container>
    </>
};