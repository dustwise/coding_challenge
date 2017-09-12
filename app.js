//Accepted grid sizes.
const MIN_GRID_SIZE = 5;
const MAX_GRID_SIZE = 250;

module.exports = function higherOrderFunction(args) {
  //check provided argument validity
  if(!args){
    return "Please, at a minimum, provide a grid size.";
  }

  if(typeof args !== 'number'){
    return "Please provide a valid grid size.";
  }

  if(typeof args === 'number' && (args < MIN_GRID_SIZE || args > MAX_GRID_SIZE)){
    return "Currently this app only supports grid sizes from 5 to 250.";
  }

//generate arrays based on size of grid provided
const gridSize = args[0];
const grid = Array(gridSize).fill([]);

//populate arrays with seed or randomized data
const generateSeed = function(grid){
  for(row of grid){
    row(gridSize).fill(Math.floor(Math.random()));
  }
};

console.log(grid);
//run life cycle

//update screen
}
