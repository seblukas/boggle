import {Dices} from "./Dices";
import {sample1} from "./fixtures/sampleDices";
import {Dice} from "./Dice";


jest.mock('./Rng');
describe('Dices', () => {
    it('should have 16 dice', () => {
        const dices = new Dices(sample1);

        // Because we are mocking the Rng class, we know the order of the dice.
        // The RNG is always 0, the order is shifted by 1 backward.
        expect(dices.shuffle()).toEqual([
            [
                new Dice(['X', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['B', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['C', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['D', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['D', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['C', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['B', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['X', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
            ]
        ]);
    });
});