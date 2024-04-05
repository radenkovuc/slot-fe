import {Sprite} from '@pixi/react';

import {useGameTextures} from "../../hooks";


export const JackpotSprite = () => {
    const {jackpot} = useGameTextures()

    if (!jackpot) {
        return null
    }

    return <Sprite texture={jackpot} y={-80} width={800} height={400}/>
};