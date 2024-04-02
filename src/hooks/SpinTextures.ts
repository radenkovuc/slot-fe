import {useEffect, useState} from "react";
import {Spritesheet, Texture} from "pixi.js";

import data from '../data/SYM.json'

export const useSpinTextures = () => {
    const [textures, setTextures] = useState<Map<number, Texture>>(new Map());

    useEffect(() => {
        const load = async () => {
            const sheet = new Spritesheet(Texture.from(data.meta.image), data);
            await sheet.parse();
            const textures = new Map()
            textures.set(1, sheet.textures.P_1)
            textures.set(2, sheet.textures.P_2)
            textures.set(3, sheet.textures.P_3)
            textures.set(4, sheet.textures.P_4)
            textures.set(5, sheet.textures.P_5)
            textures.set(6, sheet.textures.P_6)
            textures.set(7, sheet.textures.P_7)
            textures.set(8, sheet.textures.P_8)
            textures.set(9, sheet.textures.P_9)
            setTextures(textures);
        }

        void load()
    }, [])

    return textures
}