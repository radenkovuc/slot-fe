import {Container} from '@pixi/react';
import {Graphics} from "pixi.js";
import {useEffect, useState} from "react";

import {Spinners} from "./Spinners";

interface Props {
    position: number
    timer: number
    isWining?: boolean
}

export const SpinnersRow = ({position, timer, isWining}: Props) => {
    const [mask, setMask] = useState(new Graphics())

    useEffect(() => {
        const mask = new Graphics()
        mask.beginFill(0x999999);
        mask.drawRect(position, 280, 300, 248);
        mask.endFill();
        setMask(mask)
    }, [position])

    return <Container mask={mask} x={position}>
        <Spinners timer={timer} isWining={isWining}/>
    </Container>
};