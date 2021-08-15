import { Board } from "../Board";
import { Player } from "../Player";
import { Position } from "../positions";
import { getPlayerPieces } from "./getPlayerPieces";
import { King } from "./King";
import { PieceType } from "./PieceType";

export function getPlayerKing(player: Player, board: Board): King & {position: Position} {
    return getPlayerPieces(board, player).find(piece => piece.type === PieceType.KING) as King & {position: Position};
}
