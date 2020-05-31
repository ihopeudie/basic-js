function equalize(msg, key) {
    while (key.length < msg.length) {
        key += key;
    }

    if (key.length > msg.length) {
        key = key.substring(0, msg.length);
    }
    return key;
}

const LATIN_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

function generateSquare() {
    let alphabet = LATIN_ALPHABET;
    let square = [];
    for (let i = 0; i < alphabet.length; i++) {
        square[i] = alphabet.slice(i).concat(alphabet.slice(0, i));
    }
    return square;
}

class VigenereCipheringMachine {

    constructor(isDirect) {
        this.isDirect = (isDirect === undefined) || isDirect;
        this.vizSquare = generateSquare();
    }

    encrypt(msg, key) {
        if (!msg || !key) {
            throw new Error("IllegalArgumentsException")
        }
        msg = msg.toUpperCase();
        key = key.toUpperCase();
        key = equalize(msg, key);
        let encryptedText = "";
        let skipIndex = 0;
        for (let i = 0; i < msg.length; i++) {
            if (LATIN_ALPHABET.indexOf(msg[i]) > -1) {
                encryptedText += this.vizSquare[LATIN_ALPHABET.indexOf(msg[i])][LATIN_ALPHABET.indexOf(key[i - skipIndex])];
            } else {
                encryptedText += msg[i];
                skipIndex++;
            }
        }
        return this.isDirect ? encryptedText : encryptedText.split("").reverse().join("");
    }

    decrypt(msg, key) {
        if (!msg || !key) {
            throw new Error("IllegalArgumentsException")
        }
        msg = msg.toUpperCase();
        key = key.toUpperCase();
        key = equalize(msg, key);
        let decryptedText = "";
        let skipIndex = 0;
        for (let i = 0; i < msg.length; i++) {
            let row = LATIN_ALPHABET.indexOf(key[i - skipIndex]);
            const col = this.vizSquare[row].indexOf(msg[i]);
            if (col < 0) {
                skipIndex++;
                decryptedText += msg[i];
            } else {
                decryptedText += LATIN_ALPHABET[col];
            }
        }
        return this.isDirect ? decryptedText : decryptedText.split("").reverse().join("");
    }
}

module.exports = VigenereCipheringMachine;
