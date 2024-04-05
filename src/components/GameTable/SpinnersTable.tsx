import {Container} from '@pixi/react';

import {useAppSelector} from "../../store";
import {GameStatus} from "../../domain";

import {SpinnersRow} from "./SpinnersRow";


export const SpinnersTable = () => {
    const gameStatus = useAppSelector((state) => state.gameStatus)

    return <Container x={180} y={220} height={200} width={200}>
        <SpinnersRow position={0} timer={3000}
                     isWining={gameStatus !== GameStatus.NO_MATCH}/>
        <SpinnersRow position={160} timer={4000}
                     isWining={gameStatus !== GameStatus.NO_MATCH}/>
        <SpinnersRow position={320} timer={5000}
                     isWining={gameStatus === GameStatus.THREE_FIELDS_MATCH}/>
    </Container>

};