import {Container, Text} from '@pixi/react';
import {TextStyle} from "pixi.js";

import {SpinButtonSprite} from "../sprites";

const textStyle = new TextStyle({
    fontSize: 30,
    fontWeight: '400',
    fill: ['blue', '#000000'],
})

export const SpinButton = () => <Container y={580} x={400} height={400} width={800}>
    <SpinButtonSprite/>
    <Container x={0} y={0} width={300}>
        <Text text={"SPIN"} anchor={0.5} style={textStyle}/>
    </Container>
</Container>
