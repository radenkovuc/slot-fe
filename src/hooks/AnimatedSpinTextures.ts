import {useEffect, useState} from "react";
import {Texture} from "pixi.js";

import {useTextures} from "./Textures";

import p1 from '../data/P_1.json'
import p2 from '../data/P_2.json'
import p3 from '../data/P_3.json'
import p4 from '../data/P_4.json'
import p5 from '../data/P_5.json'
import p6 from '../data/P_6.json'
import p7 from '../data/P_7.json'
import p8 from '../data/P_8.json'
import p9 from '../data/P_9.json'

export const useAnimatedSpinTextures = () => {
    const [textures, setTextures] = useState<Map<number, Texture[]>>(new Map());
    const spin1 = useTextures(p1)
    const spin2 = useTextures(p2)
    const spin3 = useTextures(p3)
    const spin4 = useTextures(p4)
    const spin5 = useTextures(p5)
    const spin6 = useTextures(p6)
    const spin7 = useTextures(p7)
    const spin8 = useTextures(p8)
    const spin9 = useTextures(p9)

    useEffect(() => {
        const textures = new Map()
        textures.set(1, spin1)
        textures.set(2, spin2)
        textures.set(3, spin3)
        textures.set(4, spin4)
        textures.set(5, spin5)
        textures.set(6, spin6)
        textures.set(7, spin7)
        textures.set(8, spin8)
        textures.set(9, spin9)
        setTextures(textures)
    }, [spin1, spin2, spin3, spin4, spin5, spin6, spin7, spin8, spin9])

    return textures
}