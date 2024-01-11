export default class Rng {
    getValue(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}