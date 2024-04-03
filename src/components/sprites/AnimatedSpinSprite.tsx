import {Texture} from 'pixi.js';
import {AnimatedSprite} from '@pixi/react';

interface Props {
    textures?: Texture[]
    x?: number,
    y?: number
}

export const AnimatedSpinSprite = ({textures, x = 0, y = 0}: Props) => textures ?
    <AnimatedSprite textures={textures} isPlaying animationSpeed={0.04} width={130} height={80} x={x} y={y}/> : null

