import {Dictionary} from "./Dictionary";

describe('Dictionary', () => {


    it('should read words from file', () => {
        const dictionary = new Dictionary();

        const words = dictionary.readFromFile('src/words/words');

        expect(words.length).toBeGreaterThan(0);
    });

    it('should set and get words', () => {
        const dictionary = new Dictionary();

        dictionary.setWords(['TEST', 'testen']);

        expect(dictionary.getWords()).toEqual(['TEST', 'TESTEN']);
    });

    it('should remove words from block list', () => {
        const dictionary = new Dictionary();
        const words = ['test', 'testen'];
        dictionary.setWords(words);

        dictionary.removeWords(['testen']);

        expect(dictionary.getWords()).toEqual(['TEST']);
    });

    it('should only includes words with letters A,B,C but remove "Blocked"', () => {
        const dictionary = new Dictionary();
        const words = ['Apfel', 'Bananen', 'Cranberry', 'Blocked'];

        const filtered = dictionary
            .setWords(words)
            .filterLetters(['A', 'B'])
            .removeWords(['Blocked'])
            .getWords();

        expect(filtered).toEqual(['APFEL', 'BANANEN']);
    });

    it('should set words from file', () => {
        const dictionary = new Dictionary();

        dictionary.setWordsFromFile('src/words/words');

        expect(dictionary.getWords().length).toBeGreaterThan(0);
    });

    it('should filter words with letters A,B,C', () => {
        const dictionary = new Dictionary();
        const words = ['Apfel', 'Bananen', 'Cranberry'];

        const filtered = dictionary
            .setWords(words)
            .filterLetters(['A', 'B'])
            .getWords();

        expect(filtered).toEqual(['APFEL', 'BANANEN']);
    });

    it('should contain word in dictionary', () => {
        const dictionary = new Dictionary();
        const words = ['Apfel', 'Bananen', 'cranberry'];
        dictionary.setWords(words);

        expect(dictionary.containsWord('apfel')).toBe(true);
        expect(dictionary.containsWord('BANANEN')).toBe(true);
        expect(dictionary.containsWord('cRanberrY')).toBe(true);
    });

    it('should not contain word in dictionary', () => {
        const dictionary = new Dictionary();
        const words = ['Apfel'];
        dictionary.setWords(words);

        expect(dictionary.containsWord('melon')).toBe(false);
    });
});