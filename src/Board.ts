import {Letter} from "./Dice";
import {Dices} from "./Dices";

export class Board {

    private readonly dices: Dices;

    constructor(dices: Dices) {
        this.dices = dices;
    }

    shuffle(): Letter[][] {
        const shuffledDices = this.dices.shuffle();
        const letters: Letter[][] = [];
        for (let i = 0; i < shuffledDices.length; i++) {
            letters[i] = [];
            for (let j = 0; j < shuffledDices[i].length; j++) {
                letters[i][j] = shuffledDices[i][j].rollDice();
            }
        }
        return letters;
    }
}