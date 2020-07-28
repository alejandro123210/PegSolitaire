const deepFirstSearch = require('./searchAlgorithms/DFS');
const createBoard = require('./boardFunctions/createBoard');
//gets starting time
const startTime = new Date();
//creates the board of height/width 7 and runs DFS on it
deepFirstSearch(createBoard(7, 2));
//logs time it took to run DFS
console.log(` done in ${(new Date() - startTime) / 1000} seconds`)