import {useEffect, useState} from "react";
import {Spritesheet, Texture} from "pixi.js";

import data from '../data/GAME.json'

export const useGameTextures = () => {
    const [game, setGame] = useState<Texture | undefined>();

    useEffect(() => {
        const load = async () => {
            const sheet = new Spritesheet(Texture.from(data.meta.image), data);
            await sheet.parse();
            const gameTexture = sheet.textures.game
            setGame(gameTexture);
        }

        void load()
    }, [])

    return game
}