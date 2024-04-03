import {Sprite} from '@pixi/react';

import {useGameTextures} from "../hooks/GameTextures";

export const GameTable = () => {
    const {gameTable} = useGameTextures()

    return gameTable ? <Sprite texture={gameTable} y={220} width={800} height={400}/> : null
};