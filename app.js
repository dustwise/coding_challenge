//Accepted grid sizes.
const MIN_GRID_SIZE = 5;
const MAX_GRID_SIZE = 250;

module.exports.higherOrderFunction = function(args) {
  //CHECK ARG VALIDITY
  if(!args){
    return "Please, at a minimum, provide a grid size.";
  }

  if(typeof args !== 'number'){
    return "Please provide a valid grid size.";
  }

  if(typeof args === 'number' && (args < MIN_GRID_SIZE || args > MAX_GRID_SIZE)){
    return "Currently this app only supports grid sizes from 5 to 250.";
  }

  //GENERATE INITIAL GRID BASED ON PROVIDED SIZE
  const gridSize = args;
  const grid = generateGrid(gridSize);

  generateGrid(grid);

  function generateGrid(size){
    const newGrid = [];

    for(let i = 0; i < size; i++){
      const newRow = [];
      
      for(let j = 0; j < size; j++){
        newRow.push(Math.round(Math.random()));
      }

      newGrid.push(newRow);
    }

    return newGrid;
  }

  console.log(grid)
  //run life cycle

  //update screen
}
