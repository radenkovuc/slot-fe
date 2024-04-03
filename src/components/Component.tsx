import {BlurFilter} from 'pixi.js';
import {Container, Sprite, Stage, Text} from '@pixi/react';
import {useMemo} from 'react';
import {useGameTextures} from "../hooks/GameTextures";
import {SpinnersField} from "./SpinnersField";

export const MyComponent = () => {
    const blurFilter = useMemo(() => new BlurFilter(4), []);
    const gameTexture = useGameTextures()

    return (
        <Stage width={800} height={800} options={{background: 0xffffff}}
        >
            {gameTexture && <Sprite texture={gameTexture} y={100} width={800} height={400}/>}

            <SpinnersField/>
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