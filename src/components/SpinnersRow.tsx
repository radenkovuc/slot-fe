import {Container} from '@pixi/react';
import {Graphics} from "pixi.js";
import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {useSpinTextures} from "../hooks/SpinTextures";
import {useAnimatedSpinTextures} from "../hooks/AnimatedSpinTextures";

import {RootState} from "../store/store";
import {setFinalSpin} from "../store/slotSlice.js";

import {SpinSprite} from "./sprites/SpinSprite";
import {AnimatedSpinSprite} from "./sprites/AnimatedSpinSprite";

interface Props {
    position: number
    timer: number
    isWining?: boolean
}

type Item = {
    id: number,
    position: number
}

export const SpinnersRow = ({
                                position,
                                timer,
                                isWining,
                            }: Props) => {
    const [mask, setMask] = useState(new Graphics())
    const [items, setItems] = useState<Item[]>([])
    const {slotOrder, isSpinning} = useSelector((state: RootState) => state)
    const spinTextures = useSpinTextures()
    const animatedSpinTextures = useAnimatedSpinTextures()
    const dispatch = useDispatch()

    useEffect(() => {
        const mask = new Graphics()
        mask.beginFill(0x999999);
        mask.drawRect(position, 160, 300, 248);
        mask.endFill();
        setMask(mask)
    }, [position])

    useEffect(() => {
        const items: Item[] = []
        slotOrder.forEach((n, i) => {
            items.push({position: 80 * i + 60, id: n})
        })
        setItems(items)
    }, [slotOrder])

    useEffect(() => {
        if (isSpinning) {
            let currentPosition = 0;
            let currentTime = 0;
            let increment = Math.floor(Math.random() * 100) + 300

            const slide = () => {
                if (currentTime > timer) {
                    const selectedIndex = 9 - Math.floor(currentPosition / 80) - 1

                    const newSlotOrder = slotOrder.slice(selectedIndex).concat(slotOrder.slice(0, selectedIndex));

                    updateItems(newSlotOrder,0)
                    dispatch(setFinalSpin(((selectedIndex + 1) % 9) + 1))
                    clearInterval(interval);
                } else {
                    currentPosition = (currentPosition + increment + 20) % 720
                    currentTime += 50
                    increment -= Math.floor(increment * currentTime / timer)
                    updateItems(slotOrder,currentPosition)
                }
            }

            const interval = setInterval(slide, 50);

            return () => {
                clearInterval(interval);
            };
        }
    }, [slotOrder, timer, dispatch, isSpinning])

    const updateItems = (slotOrder: number[], startPosition: number) => {
        const items: Item[] = []
        slotOrder.forEach((n, i) => {
            items.push({position: (80 * i + 60 + startPosition) % 720, id: n})
        })
        setItems(items)
    }

    return <Container mask={mask} x={position}>
        {items.map((item, index) => isWining && index === 1 ?
            <AnimatedSpinSprite textures={animatedSpinTextures.get(item.id)} y={item.position} key={item.id}/> :
            <SpinSprite texture={spinTextures.get(item.id)} y={item.position} key={item.id}/>)}
    </Container>
};