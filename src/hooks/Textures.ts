import {useEffect, useState} from "react";
import {Spritesheet, Texture} from "pixi.js";

export const useTextures = (data: any) => {
    const [textures, setTextures] = useState<Texture[] | undefined>();

    useEffect(() => {
        const load = async () => {
            const sheet = new Spritesheet(Texture.from(data.meta.image), data);
            await sheet.parse();
            const textures = Object.keys(sheet.textures).map((key: string) => sheet.textures[key as keyof typeof sheet.textures] as Texture);
            setTextures(textures);
        }

        void load()
    }, [data])

    return textures
}