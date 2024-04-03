import {Container} from '@pixi/react';
import {SpinnersRow} from "./SpinnersRow";
import {useSpinTextures} from "../hooks/SpinTextures";
import {useAnimatedSpinTextures} from "../hooks/AnimatedSpinTextures";
import {useEffect, useState} from "react";

function getRandomArray() {
    const numbers: number[] = [];
    while (numbers.length < 9) {
        const randomNumber = Math.floor(Math.random() * 9) + 1;
        if (!numbers.includes(randomNumber)) {
            numbers.push(randomNumber);
        }
    }
    return numbers;
}

enum WinnerType {
    NONE,
    TWO_FIELD,
    THREE_FIELDS
}

export const SpinnersField = () => {
    const [selected, setSelected] = useState<number[]>([0, 0, 0])
    const [winnerType, setWinnerType] = useState<WinnerType>(WinnerType.NONE)
    const [numbers, setNumbers] = useState<number[]>([])
    const spinTextures = useSpinTextures()
    const animatedSpinTextures = useAnimatedSpinTextures()

    useEffect(() => {
        setNumbers(getRandomArray())
    }, [])

    useEffect(() => {
        if (!selected.some(s => s === 0) && selected[0] === selected[1]) {
            if (selected[2] === selected[1]) {
                setWinnerType(WinnerType.THREE_FIELDS)
            } else {
                setWinnerType(WinnerType.TWO_FIELD)
            }
        } else {
            setWinnerType(WinnerType.NONE)
        }
    }, [selected])

    const onFinish = (row: number) => {
        return (selectedSpin: number) => {
            setSelected(prev => {
                const selectedSpins = [...prev]
                selectedSpins[row] = selectedSpin % 3 + 1
                console.log('selectedSpin', selectedSpin)
                console.log('selectedSpins', selectedSpins)
                return selectedSpins
            })

        }
    }

    return <Container x={180} y={100} height={200} width={200}>
        <SpinnersRow
            animatedSpinTextures={animatedSpinTextures}
            spinTextures={spinTextures}
            numbers={numbers}
            position={0}
            timer={3000}
            onFinish={onFinish(0)}
            isWining={winnerType !== WinnerType.NONE}/>
        <SpinnersRow
            animatedSpinTextures={animatedSpinTextures}
            spinTextures={spinTextures}
            numbers={numbers}
            position={160}
            timer={4000}
            onFinish={onFinish(1)}
            isWining={winnerType !== WinnerType.NONE}/>
        <SpinnersRow
            animatedSpinTextures={animatedSpinTextures}
            spinTextures={spinTextures}
            numbers={numbers}
            position={320}
            timer={5000}
            onFinish={onFinish(2)}
            isWining={winnerType === WinnerType.THREE_FIELDS}/>
    </Container>

};