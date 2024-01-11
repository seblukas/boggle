import {Dice, Letter} from "./Dice";
import {Dices} from "./Dices";
import {Board} from "./Board";

export class Game {

    private dices = [
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
        new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
    ];

    board = new Board(new Dices(this.dices));


   playRound(): void {
        const board = this.board.shuffle();
        console.log(board);
    }
}