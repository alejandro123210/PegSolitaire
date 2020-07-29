const deepFirstSearch = require('./searchAlgorithms/DFS');
const createBoard = require('./boardFunctions/createBoard');
const aStar = require('./searchAlgorithms/AStar');

//timer
const startTime = new Date();
console.table(createBoard(7, 2));

//serach algorithms
// deepFirstSearch(createBoard(7, 2));
aStar(createBoard(7, 2));

//timer
console.log(` done in ${(new Date() - startTime) / 1000} seconds`);