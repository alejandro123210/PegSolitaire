const deepFirstSearch = require('./searchAlgorithms/DFS');
const createBoard = require('./boardFunctions/createBoard');
const aStar = require('./searchAlgorithms/AStar');

//timer
const startTime = new Date();

//serach algorithms
console.log('running DFS search...');
deepFirstSearch(createBoard(7, 2));
// console.log('running A* search...');
// aStar(createBoard(7, 2));

//timer
console.table(createBoard(7, 2));
console.log(` done in ${(new Date() - startTime) / 1000} seconds`);