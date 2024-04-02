import {BlurFilter} from 'pixi.js';
import {Container, Sprite, Stage, Text} from '@pixi/react';
import {useMemo} from 'react';
import {useAnimatedSpinTextures} from "../hooks/AnimatedSpinTextures";
import {useGameTextures} from "../hooks/GameTextures";
import {useSpinTextures} from "../hooks/SpinTextures";
import {SpinSprite} from "./sprites/SpinSprite";
import {AnimatedSpinSprite} from "./sprites/AnimatedSpinSprite";

export const MyComponent = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const animatedSpinTextures = useAnimatedSpinTextures()
    const spinTextures = useSpinTextures()
    const gameTexture = useGameTextures()

    return (
        <Stage width={800} height={800} options={{background: 0xffffff}}
        >
            {gameTexture && <Sprite texture={gameTexture} y={100} width={800} height={400}/>}

            <SpinSprite texture={spinTextures.get(3)} x={180} y={160}/>
            <AnimatedSpinSprite textures={animatedSpinTextures.get(4)} x={180} y={240}/>
            <SpinSprite texture={spinTextures.get(5)} x={180} y={320}/>

            <SpinSprite texture={spinTextures.get(1)} x={340} y={160}/>
            <AnimatedSpinSprite textures={animatedSpinTextures.get(4)} x={340} y={240}/>
            <SpinSprite texture={spinTextures.get(7)} x={340} y={320}/>

            <SpinSprite texture={spinTextures.get(1)} x={340} y={160}/>
            <AnimatedSpinSprite textures={animatedSpinTextures.get(4)} x={340} y={240}/>
            <SpinSprite texture={spinTextures.get(7)} x={340} y={320}/>

            <Container x={400} y={730}>
                <Text text="Hello World" anchor={{x: 0.5, y: 0.5}} filters={[blurFilter]}
                      eventMode='static'
                      onclick={() => {
                          console.log("radi")
                      }}/>
            </Container>
        </Stage>
    );
};