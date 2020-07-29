const findDiff = (board1, board2) => {
    var diff = 0;
    for (let y = 0; y < board1.length; y++) {
        for (let x = 0; x < board1.length; x++) {
            board1[y][x] !== board2[y][x] && diff++;
        }
    }
    return diff;
}
module.exports = findDiff;