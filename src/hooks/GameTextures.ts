import {useEffect, useState} from "react";
import {Spritesheet, Texture} from "pixi.js";

import gameData from '../data/GAME.json'
import uiData from '../data/UI.json'

export const useGameTextures = () => {
    const [gameTable, setGameTable] = useState<Texture | undefined>();
    const [jackpot, setJackpot] = useState<Texture | undefined>();
    const [button, setButton] = useState<Texture | undefined>();

    useEffect(() => {
        const load = async () => {
            let gameSheet = new Spritesheet(Texture.from(gameData.meta.image), gameData);
            await gameSheet.parse();
            const gameTexture = gameSheet.textures.game
            setGameTable(gameTexture);

            const uiSheet = new Spritesheet(Texture.from(uiData.meta.image), uiData);
            await uiSheet.parse();
            const jackpotTexture = uiSheet.textures.JACK_WND
            const buttonTexture = uiSheet.textures.b_gamble_A
            setJackpot(jackpotTexture);
            setButton(buttonTexture);
        }

        void load()
    }, [])

    return {gameTable, jackpot, button}
}