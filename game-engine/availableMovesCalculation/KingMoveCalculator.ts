import { Board } from "../Board";
import { Move } from "../Move";
import { King } from "../pieces";
import { Position } from "../positions";

export class KingMoveCalculator {
    getAvailableMovesForKing(king: King & {position: Position}, board: Board): Move[] {
        // todo
        return [];
    }
}
