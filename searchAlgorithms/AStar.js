const checkForWin = require('../boardFunctions/checkForWin');
const findDiff = require('../boardFunctions/findDiff');
const listMoves = require('../boardFunctions/listMoves');
const goal = require('../boardFunctions/createBoard')(7, 2, true);
const aStar = (board, iterations = 0) => {
    if (checkForWin(board)) {
        console.table(board);
        return true;
    } else {
        const possibleMoves = listMoves(board);
        var possibleMovesWithCost = [];
        for (let move in possibleMoves) {
            const moveWithCost = {
                cost: findDiff(possibleMoves[move], goal) + iterations,
                move: possibleMoves[move]
            }
            possibleMovesWithCost.push(moveWithCost);
        }
        possibleMovesWithCost.sort((a, b) => a.cost > b.cost ? 1 : -1);
        for (let moveObject in possibleMovesWithCost) {
            if (aStar(possibleMovesWithCost[moveObject].move, iterations++)) {
                return true;
            };
        }
    }
}
module.exports = aStar;