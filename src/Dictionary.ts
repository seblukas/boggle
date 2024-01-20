import * as fs from "fs";
import {Letter} from "./Dice";

export class Dictionary {

    private words: string[] = [];

    readFromFile(path: string): string[] {
        return fs.readFileSync(path, 'utf8').split('\n');
    }

    getWords(): string[] {
        return this.words;
    }

    setWords(words: string[]): Dictionary {
        this.words = words.map(word => word.toUpperCase());
        return this;
    }


    removeWords(blockListWords: string[]): Dictionary {
        const uppercaseBlockListWords = blockListWords.map(word => word.toUpperCase());
        this.words = this.words.filter(word => !uppercaseBlockListWords.includes(word));
        return this;
    }

    filterLetters(letters: Letter[]): Dictionary {
        this.words = this.words.filter(word => {
           const letter = word.charAt(0).toUpperCase() as Letter;
              return letters.includes(letter);
        });
        return this;
    }

    setWordsFromFile(path: string): Dictionary {
        const words = this.readFromFile(path);
        this.setWords(words);
        return this;
    }

    containsWord(searchedWord: string): boolean {
        return this.words.includes(searchedWord.toUpperCase());
    }
}