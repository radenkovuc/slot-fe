import {Stage} from '@pixi/react';
import {Provider} from "react-redux";

import {store} from "../../store";

import {GameTableSprite} from "../sprites";
import {SpinnersTable} from "../GameTable";
import {Jackpot} from "./Jackpot";
import {SpinButton} from "./SpinButton";

export const Game = () => (
    <Stage width={800} height={800} options={{background: 0xffffff}}>
        <Provider store={store}>
            <Jackpot/>
            <GameTableSprite/>
            <SpinnersTable/>
            <SpinButton/>
        </Provider>
    </Stage>
);
