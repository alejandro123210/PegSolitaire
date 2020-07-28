const checkForWin = (board) => {
    //finds the centermost spot on the baord
    const center = Math.round((board.length - 1) / 2);
    if (board[center][center] === 1) {
        //assumes there are no pegs on the baord
        var pegCount = 0;
        //loops through entire board
        for (y in board) {
            for (x in board[y]) {
                //if the board has a filled hole
                if(board[y][x] === 1) {
                    //add 1 to the pegcount, if it's over 1, return false
                    pegCount++
                    if (pegCount > 1) { 
                        return false 
                    }
                }
            }
        }
        //if peg count is 1 and the center is the filled peg, return true
        return true;
    } else {
        return false;
    }
}

module.exports = checkForWin;