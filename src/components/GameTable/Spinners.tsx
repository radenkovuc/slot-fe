import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";

import {useAnimatedSpinTextures, useSpinTextures} from "../../hooks";
import {finishSpinning, useAppSelector} from "../../store";

import {AnimatedSpinSprite, SpinSprite} from "../sprites";

interface Props {
    timer: number
    isWining?: boolean
}

type Item = {
    id: number,
    position: number
}

export const Spinners = ({timer, isWining}: Props) => {
    const [items, setItems] = useState<Item[]>([])
    const {slotOrder, isSpinning} = useAppSelector((state) => state)
    const spinTextures = useSpinTextures()
    const animatedSpinTextures = useAnimatedSpinTextures()
    const dispatch = useDispatch()

    useEffect(() => {
        updateItems(slotOrder, 0)
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

                    updateItems(newSlotOrder, 0)
                    dispatch(finishSpinning(((selectedIndex + 1) % 9) + 1))
                    clearInterval(interval);
                } else {
                    currentPosition = (currentPosition + increment + 20) % 720
                    currentTime += 50
                    increment -= Math.floor(increment * currentTime / timer)
                    updateItems(slotOrder, currentPosition)
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

    return <>
        {items.map((item, index) => isWining && index === 1 ?
            <AnimatedSpinSprite textures={animatedSpinTextures.get(item.id)} y={item.position} key={item.id}/> :
            <SpinSprite texture={spinTextures.get(item.id)} y={item.position} key={item.id}/>)}
    </>
};