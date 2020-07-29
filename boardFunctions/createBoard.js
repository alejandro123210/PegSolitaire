//overall size of the board, the size of the corners, and whether or not to generate the ending board
const createBoard = (size, cornerSize, goal = false) => {
    //the board is a 2d array, created by this function
    var boardArray = [];
    //for each vertical row of the board
    for (let h = 0; h < size; h++) {
        var row = [];
        //for each object in the row of the baord
        for (let w = 0; w < size; w++) {
            //check if spot is a corner
            const isCorner = 
                (h < cornerSize || h >= size - cornerSize) && 
                (w < cornerSize || w >= size - cornerSize)
            //if the spot is a corner, return 99 as a placeholder for emtpy space
            isCorner ? row.push(99) : row.push(goal ? 0 : 1);
        }
        //push each row, this means that the higher index on the board, the lower the row
        //functions in listMove are designed so that the coordinates make a bit more sense
        boardArray.push(row);
    }
    //sets the middle of array to 0 
    boardArray
        [Math.round((size - 1) / 2)] //vertical coord
        [Math.round((size - 1) / 2)] //horizontal coord
        = goal ? 1 : 0;
    return boardArray;
}
module.exports = createBoard;
