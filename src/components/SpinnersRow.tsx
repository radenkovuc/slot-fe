import {Container} from '@pixi/react';
import {Graphics, Texture} from "pixi.js";
import {useEffect, useState} from "react";

import {SpinSprite} from "./sprites/SpinSprite";
import {AnimatedSpinSprite} from "./sprites/AnimatedSpinSprite";

interface Props {
    numbers: number[]
    position: number
    timer: number
    isWining?: boolean
    spinTextures: Map<number, Texture>
    animatedSpinTextures: Map<number, Texture[]>
    onFinish: (selectedSpin: number) => void
}

type Item = {
    id: number,
    position: number
}

export const SpinnersRow = ({
                                numbers,
                                position,
                                timer,
                                isWining,
                                spinTextures,
                                animatedSpinTextures,
                                onFinish
                            }: Props) => {
    const [mask, setMask] = useState(new Graphics())
    const [items, setItems] = useState<Item[]>([])

    useEffect(() => {
        const mask = new Graphics()
        mask.beginFill(0x999999);
        mask.drawRect(position, 160, 300, 248);
        mask.endFill();
        setMask(mask)
    }, [position])

    useEffect(() => {
        const items: Item[] = []
        numbers.forEach((n, i) => {
            items.push({position: 80 * i + 60, id: n})
        })
        setItems(items)

        let currentPosition = 0;
        let currentTime = 0;
        let increment = Math.floor(Math.random() * 100) + 300

        const slide = () => {
            if (currentTime > timer) {
                const selectedIndex = 9 - Math.floor(currentPosition / 80) - 1

                const newNumbers = numbers.slice(selectedIndex).concat(numbers.slice(0, selectedIndex));

                const items: Item[] = []
                newNumbers.forEach((n, i) => {
                    items.push({position: 80 * i + 60, id: n})
                })
                setItems(items)
                onFinish(((selectedIndex + 1) % 9) + 1)
                clearInterval(interval);
            } else {
                currentPosition = (currentPosition + increment + 20) % 720
                currentTime += 50
                increment -= Math.floor(increment * currentTime / timer)
                const items: Item[] = []
                numbers.forEach((n, i) => {
                    items.push({position: (80 * i + 60 + currentPosition) % 720, id: n})
                })
                setItems(items)
            }
        }
        const interval = setInterval(slide, 50);

        return () => {
            clearInterval(interval);
        };
    }, [numbers, timer])


    return <Container mask={mask} x={position}>
        {items.map((item, index) => isWining && index === 1 ?
            <AnimatedSpinSprite textures={animatedSpinTextures.get(item.id)} y={item.position} key={item.id}/> :
            <SpinSprite texture={spinTextures.get(item.id)} y={item.position} key={item.id}/>)}
    </Container>
};