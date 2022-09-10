import { Move } from "game-engine";
import {
    mapIndexToChessFile,
    mapRankIndexToRank,
    Position,
} from "game-engine/positions";
import _ from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { GameContext } from "../GameContext";
import { playerSide } from "./playerSide";

interface SelectedPiece {
    fileIndex: number;
    tileIndex: number;
}

export const BoardContext = React.createContext<{
    selectedPiece: SelectedPiece | null;
    setSelectedPiece: React.Dispatch<
        React.SetStateAction<SelectedPiece | null>
    >;
    availableMoves: Move[];
    setAvailableMoves: React.Dispatch<React.SetStateAction<Move[]>>;
    promotionMenuPosition: Position | null;
    setPromotionMenuPosition: React.Dispatch<
        React.SetStateAction<Position | null>
    >;
}>({} as any);

export const BoardContextProvider = ({
    children,
}: {
    children: JSX.Element;
}) => {
    const gameContext = useContext(GameContext);
    const [selectedPiece, setSelectedPiece] = useState<SelectedPiece | null>(
        null
    );
    const [availableMoves, setAvailableMoves] = useState<Move[]>([]);
    const [promotionMenuPosition, setPromotionMenuPosition] =
        useState<Position | null>(null); // stores null or promoting position

    // update available moves after selecting a piece
    useEffect(() => {
        if (!selectedPiece) {
            setAvailableMoves([]);
            return;
        }

        const availableSelectedPieceMoves =
            gameContext.availableMovesForPlayer.filter(
                (move) =>
                    move.from.file ===
                        mapIndexToChessFile(selectedPiece.fileIndex) &&
                    move.from.rank ===
                        mapRankIndexToRank(selectedPiece.tileIndex)
            );
        setAvailableMoves(availableSelectedPieceMoves);
    }, [selectedPiece, gameContext]);

    // make a random enemy move 500ms after player move
    useEffect(() => {
        if (
            gameContext.currentPlayer !== null &&
            gameContext.currentPlayer !== playerSide
        ) {
            setTimeout(() => {
                const randomMove = _.sample(
                    gameContext.availableMovesForPlayer
                ) as Move;
                gameContext.move(randomMove);
            }, 500);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameContext.currentPlayer]);

    return (
        <BoardContext.Provider
            value={{
                selectedPiece,
                setSelectedPiece,
                availableMoves,
                setAvailableMoves,
                promotionMenuPosition,
                setPromotionMenuPosition,
            }}
        >
            {children}
        </BoardContext.Provider>
    );
};
