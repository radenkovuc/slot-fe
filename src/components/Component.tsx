import {Stage} from '@pixi/react';
import {Provider} from "react-redux";

import {store} from "../store/store";

import {SpinnersField} from "./SpinnersField";
import {GameTable} from "./GameTable";

export const MyComponent = () => {

    return (
        <Stage width={800} height={800} options={{background: 0xffffff}}>
            <Provider store={store}>
                <GameTable/>
                <SpinnersField/>
            </Provider>
        </Stage>
    );
};