import {Board} from "./Board";
import {Dices} from "./Dices";
import {Mock} from "ts-mockery";
import {Dice} from "./Dice";

jest.mock('./Rng');
describe('Board', () => {

    it('should have 16 dice', () => {
        const dices = Mock.of<Dices>();
        dices.shuffle = jest.fn().mockReturnValue([
            [
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['B', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['C', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['D', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['D', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['C', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['B', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['Z', 'B', 'C', 'D', 'E', 'F']),
            ],
            [
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['X', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['A', 'B', 'C', 'D', 'E', 'F']),
                new Dice(['X', 'B', 'C', 'D', 'E', 'F']),
            ]
        ]);
        const board = new Board(dices);

        expect(board.shuffle()).toEqual([
            ['A', 'B', 'C', 'D'],
            ['D', 'C', 'B', 'A'],
            ['Z', 'Z', 'Z', 'Z'],
            ['A', 'X', 'A', 'X']
        ]);
    });
});