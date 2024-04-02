import {Texture} from 'pixi.js';
import {Sprite} from '@pixi/react';

interface Props {
    texture?: Texture
    x: number,
    y: number
}

export const SpinSprite = ({texture, x, y}: Props) => texture ?
    <Sprite texture={texture} width={130} height={80} x={x} y={y}/> : null

