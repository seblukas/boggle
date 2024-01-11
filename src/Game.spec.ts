import {Game} from "./Game";

describe('Game', () => {
    it('should have 16 dice', () => {
        const game = new Game();
        game.playRound();
    });
});