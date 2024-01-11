import {Dice, Letter} from "./Dice";

jest.mock('./Rng');

describe('Dice', () => {

    it('should have six letters', () => {
        let letters: Letter[] = ['A', 'B', 'C', 'D', 'E', 'F'];
        const dice = new Dice(letters);

        expect(dice.getLetters()).toEqual(letters);
    });

    it('should throw an error if the dice does not have six letters', () => {
        expect(() => new Dice(['A', 'B', 'C', 'D', 'E'])).toThrowError('Dice must have six letters');
    });

    it('should return a letter when the dice is rolled', () => {
        let letters: Letter[] = ['A', 'B', 'C', 'D', 'E', 'F'];
        const dice = new Dice(letters);

        expect(dice.rollDice()).toEqual('A');
    });
});