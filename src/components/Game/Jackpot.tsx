import {Container, Text} from '@pixi/react';
import {TextStyle} from "pixi.js";

import {useAppSelector} from "../../store";
import {GameStatus} from "../../domain";

import {JackpotSprite} from "../sprites";

const SMALL_PRICE = "456.78"
const BIG_PRICE = "1,123,456.78"

const textStyle = new TextStyle({
    fontSize: 34,
    fontWeight: '400',
    align: 'right',
    fill: ['#ffffff', '#00ff99'],
})

export const Jackpot = () => {
    const gameStatus = useAppSelector((state) => state.gameStatus)

    if (gameStatus === GameStatus.NO_MATCH) {
        return null
    }

    return <Container>
        <JackpotSprite/>
        <Container x={400} y={160} width={300}>
            <Text text={gameStatus === GameStatus.TWO_FIELDS_MATCH ? SMALL_PRICE : BIG_PRICE} anchor={0.5}
                  style={textStyle}/>
        </Container>
    </Container>
};