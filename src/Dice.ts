import Rng from "./Rng";

export type Letter =
    'A'
    | 'B'
    | 'C'
    | 'D'
    | 'E'
    | 'F'
    | 'G'
    | 'H'
    | 'I'
    | 'J'
    | 'K'
    | 'L'
    | 'M'
    | 'N'
    | 'O'
    | 'P'
    | 'Q'
    | 'R'
    | 'S'
    | 'T'
    | 'U'
    | 'V'
    | 'X'
    | 'Y'
    | 'Z';

export class Dice {

    private readonly letters: Letter[];

    constructor(letters: Letter[]) {
        if (letters.length !== 6) {
            throw new Error('Dice must have six letters');
        }
        this.letters = letters;
    }

    getLetters(): Letter[] {
        return this.letters;
    }

    rollDice(): Letter {
        const rng = new Rng();
        const index = rng.getValue(0, 5);
        return this.letters[index];
    }
}