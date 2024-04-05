import {Sprite} from '@pixi/react';
import {useDispatch} from "react-redux";

import {useGameTextures} from "../../hooks";
import {startSpinning, useAppSelector} from "../../store";

import {getSlotSequences} from "../../services";


export const SpinButtonSprite = () => {
    const isSpinning = useAppSelector((state) => state.isSpinning)
    const {button} = useGameTextures()
    const dispatch = useDispatch()

    if (!button) {
        return null
    }

    const onClick = async () => {
        const slotSequence = await getSlotSequences()
        dispatch(startSpinning(slotSequence))
    }

    return <Sprite texture={button} anchor={0.5} y={0} width={200} height={40}
                   alpha={isSpinning ? 0.5 : 1}
                   eventMode={isSpinning ? 'none' : 'static'}
                   onclick={onClick}
                   cursor='pointer'/>

};