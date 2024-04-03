import {Stage} from '@pixi/react';
import {Provider} from "react-redux";

import {store} from "../store/store";
import {Game} from "./Game";

export const PixiStage = () => (
    <Stage width={800} height={800} options={{background: 0xffffff}}>
        <Provider store={store}>
            <Game/>
        </Provider>
    </Stage>
);
