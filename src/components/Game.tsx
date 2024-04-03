import {SpinnersTable} from "./SpinnersTable";
import {GameTable} from "./GameTable";
import {Jackpot} from "./Jackpot";
import {Button} from "./Button";

export const Game = () => {

    return (
        <>
            <Jackpot/>
            <GameTable/>
            <SpinnersTable/>
            <Button/>
        </>
    )
}