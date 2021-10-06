export enum GameState {
    UNSTARTED = 'UNSTARTED',
    IN_PROGRESS = 'IN_PROGRESS',
    WHITE_WON = 'WHITE_WON',
    BLACK_WON = 'BLACK_WON',
    DRAW_BY_STALEMATE = 'DRAW_BY_STALEMATE',
    DRAW_BY_INSUFFICIENT_MATERIAL = 'DRAW_BY_INSUFFICIENT_MATERIAL',
    DRAW_BY_REPETITION = 'DRAW_BY_REPETITION',
    DRAW_BY_50_MOVE_RULE = 'DRAW_BY_50_MOVE_RULE',
    DRAW_BY_75_MOVE_RULE = 'DRAW_BY_75_MOVE_RULE',
    DRAW_BY_AGREEMENT = 'DRAW_BY_AGREEMENT',
}
