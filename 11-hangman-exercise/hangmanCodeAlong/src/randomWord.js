import ENGLISH_WORDS from "./words";

function randomWord() {
    return ENGLISH_WORDS[Math.floor(Math.random() * ENGLISH_WORDS.length)];
}

export default randomWord;