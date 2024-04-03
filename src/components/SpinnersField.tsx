import {Container} from '@pixi/react';
import {useSelector} from "react-redux";

import {RootState} from "../store/store";

import {WinnerType} from "../domain/WinnerType";

import {SpinnersRow} from "./SpinnersRow";


export const SpinnersField = () => {
    const winnerType = useSelector((state: RootState) => state.slot.winnerType)

    return <Container x={180} y={220} height={200} width={200}>
        <SpinnersRow position={0} timer={3000}
                     isWining={winnerType !== WinnerType.NONE}/>
        <SpinnersRow position={160} timer={4000}
                     isWining={winnerType !== WinnerType.NONE}/>
        <SpinnersRow position={320} timer={5000}
                     isWining={winnerType === WinnerType.THREE_FIELDS}/>
    </Container>

};