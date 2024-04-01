import {BlurFilter} from 'pixi.js';
import {Container, Sprite, Stage, Text} from '@pixi/react';
import {useMemo, useState} from 'react';

export const MyComponent = () => {
    const [url,setURL]=useState('https://pixijs.io/pixi-react/img/bunny.png')
    const blurFilter = useMemo(() => new BlurFilter(4), []);

    const onClick=()=>{
        setURL('https://slot-be.vercel.app/images/P_1.png')
    }

    return (
        <Stage options={{background: 0xffffff}}
        >
            <Sprite
                image={url}
                x={400}
                y={270}
                anchor={{x: 0.5, y: 0.5}}
                eventMode='static'
                onclick={onClick}
            />

            <Container x={400} y={330}>
                <Text text="Hello World" anchor={{x: 0.5, y: 0.5}} filters={[blurFilter]}
                      eventMode='static'
                      onclick={() => {
                    console.log("radi")
                }}/>
            </Container>
        </Stage>
    );
};