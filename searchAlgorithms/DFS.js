const listMoves = require('../boardFunctions/listMoves');
const checkForWin = require('../boardFunctions/checkForWin');

const depthFirstSearch = (currentMove, explored = {}, iterations = 0) => {
    //if the move has already been tried
    if (!explored[currentMove]) {
        //checks for a win
        if (checkForWin(currentMove)) {
            console.table(currentMove);
            //if win, return true, this will go back up
            //through all the iterations to stop the func
            return true;
        } else {
            //finds the next level down of possible moves (if none returns nothing, function ends and next node is checked)
            const nextMoves = listMoves(currentMove);
            //iterates through next possible moves and recusively calls itself
            for (let move in nextMoves) {
                explored[currentMove] = true;
                if (depthFirstSearch(nextMoves[move], explored, iterations++)) {
                    //checks if DFS is returning true, then if it is returns it again
                    //this way DFS will stop once it finds a winning board
                    return true;
                };
            }
        }
    } else {
        //if move isn't already explored
        return;
    }
}

module.exports = depthFirstSearch;