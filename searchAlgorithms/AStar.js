const checkForWin = require('../boardFunctions/checkForWin');
const findDiff = require('../boardFunctions/findDiff');
const listMoves = require('../boardFunctions/listMoves');
//the goal board to measure against
const goal = require('../boardFunctions/createBoard')(7, 2, true);
const aStar = (board, iterations = 0) => {
    //checks for a win
    if (checkForWin(board)) {
        // console.table(board);
        return true;
    } else {
        //gets list of all possible moves (without the heuristic)
        const possibleMoves = listMoves(board);
        //this is the array that will contain the moves with the cost h + g
        var possibleMovesWithCost = [];
        //for each move in possible moves creates a move with cost
        for (let move in possibleMoves) {
            const moveWithCost = {
                //h + g
                cost: findDiff(possibleMoves[move], goal) + iterations,
                move: possibleMoves[move]
            }
            possibleMovesWithCost.push(moveWithCost);
        }
        //sort based on cost so that the search looks for the lowest possible cost
        possibleMovesWithCost.sort((a, b) => a.cost > b.cost ? 1 : -1);
        //for every move from lowest to highest cost
        for (let moveObject in possibleMovesWithCost) {
            if (aStar(possibleMovesWithCost[moveObject].move, iterations++)) {
                console.table(possibleMovesWithCost[moveObject].move);
                return true;
            };
        }
    }
}
module.exports = aStar;