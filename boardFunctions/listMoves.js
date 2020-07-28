const checkDirection = (board, x, y, type) => {
    //checks if checking an undefined index
    size = board.length;
    if (
        x <= 1 && type === 'left' ||
        x >= (size - 2) && type === 'right' ||
        y <= 1 && type === 'up' ||
        y >= (size - 2) && type === 'down'
    ) {
        //if undefined, returns nothing
        return;
    }

    //really not sure why sometimes it's getting converted to a string
    x = parseInt(x);
    y = parseInt(y);
    const directions = {
        up: {
            x: x,
            xExtended: x,
            y: y - 1,
            yExtended: y - 2,
        },
        down: {
            x: x,
            xExtended: x,
            y: y + 1,
            yExtended: y + 2,
        },
        left: {
            x: x - 1,
            xExtended: x - 2,
            y: y,
            yExtended: y,
        },
        right: {
            x: x + 1,
            xExtended : x + 2,
            y: y,
            yExtended: y,
        }
    }

    //avoids pointer problems, for some reason creating a const out of the board didn't work
    var newBoard = [];
    for (var row in board) {
        newBoard.push(JSON.parse(JSON.stringify(board[row])))
    };

    //if the spot to the spot to the (up, down, left, right) of the peg is also a peg
    if(board[directions[type].y][directions[type].x] === 1) {
        //check 1 farther, if it's a hole then return the possible board state
        if (board[directions[type].yExtended][directions[type].xExtended] === 0) {
            newBoard[y][x] = 0;
            newBoard[directions[type].y][directions[type].x] = 0
            newBoard[directions[type].yExtended][directions[type].xExtended] = 1
            return newBoard;
        }
    }
}

//looks around each peg
const lookAround = (board, x, y) => {
    //pegs options looking up, down, left, right from the peg
    const options = [
        checkDirection(board, x, y, 'up'), 
        checkDirection(board, x, y, 'down'), 
        checkDirection(board, x, y, 'left'), 
        checkDirection(board, x, y, 'right'),
        //filters out every time there isn't an option from look around
        //this could probably be coded a bit better where this fuction
        //wouldn't even be needed
    ].filter(item => item !== undefined)
    //returns all found possible board states
    return options;
}

const listMoves = (board) => {
    //this array will hold all possible board states
    var options = [];
    //runs through every space on the board
    for (let y in board) {
        for (let x in board) {
            //every option available to every peg on the board
            if (board[y][x] === 1) {
                options.push.apply(options, lookAround(board, x, y));
            }
        }
    }
    //if there are possible moves to make
    if (options.length !== 0) {
        return options;
    }
}

module.exports = listMoves;