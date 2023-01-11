function stringLengths(string) {
    const lengths = [];
    for (let i = 0; i < string.length; i++) {
        lengths.push(string[i].length);
    }
    return lengths;
}
const words = ["boo", "doooo", "hoo","ro"];
const print_words = stringLengths(words);
console.log(print_words);