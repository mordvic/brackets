 module.exports = function check(str, bracketsConfig) {
    const config = new Map(bracketsConfig);
    const strToArr = str.split('');
    const arr = [];

    for (let char of strToArr) {
        if (arr.length && char === config.get(arr[arr.length - 1])) {
            arr.pop();
        } else if (config.has(char)) {
            arr.push(char);
        }
        else if (char !== config.get(arr.pop())) {
            return false;
        }
    }

    return arr.length === 0;
}
