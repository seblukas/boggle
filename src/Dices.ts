import {Dice} from "./Dice";
import Rng from "./Rng";

export class Dices {

    private readonly dices: Dice[];

    constructor(dices: Dice[]) {
        if (dices.length !== 16) {
            throw new Error('Length not 16');
        }
        this.dices = dices;
    }

    shuffle(): Dice[][] {
        const clonedDices = this.permutateDices();
        const shuffledDices = this.putInto4x4Matrix(clonedDices);
        return shuffledDices;
    }

    getDices(): Dice[][] {
        return this.putInto4x4Matrix(this.dices);
    }

    private putInto4x4Matrix(dices: Dice[]): Dice[][] {
        const shuffledDices: Dice[][] = [];
        for (let i = 0; i < dices.length; i += 4) {
            shuffledDices.push(dices.slice(i, i + 4));
        }
        return shuffledDices;
    }

    private permutateDices(): Dice[] {
        const clonedDices = this.dices.slice();
        for (let i = 0; i < clonedDices.length; i++) {
            const randomIndex = new Rng().getValue(0, 15);
            const temp = clonedDices[i];
            clonedDices[i] = clonedDices[randomIndex];
            clonedDices[randomIndex] = temp;
        }
        return clonedDices;
    }
}