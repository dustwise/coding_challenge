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
  const initialGrid = generateGrid(gridSize);
  const currentGrid = initialGrid;

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

  //run life cycle

  updateGrid(currentGrid, initialGrid)

  function updateGrid(current, initial){
    console.log(current);
    let newGrid = current.map((row, rowIndex) => {
      return row.map((cell, cellIndex) => {
        const cellIsAlive = cell;

        const above = current[rowIndex - 1] ? 
                      current[rowIndex - 1].slice(cellIndex === 0 ? 0 : cellIndex - 1, cellIndex + 2) : 
                      [];
        const below = current[rowIndex + 1] ? 
                      current[rowIndex + 1].slice(cellIndex === 0 ? 0 : cellIndex - 1, cellIndex + 2) : 
                      [];
        const immediate = [ row[cellIndex - 1], row[cellIndex + 1]];
        const aliveNeighbors = above.concat(below, immediate).filter(neighbor => neighbor === 1).length;

        if(cellIsAlive){
          if(aliveNeighbors >= 2 && aliveNeighbors <= 3){
            return 1;
          } else {
            return 0;
          }
        } else {
          if(aliveNeighbors === 3){
            return 1;
          } else {
            return 0;
          }
        }
      });
    });
    console.log("----------------")
    console.log(newGrid);
  }


  //update screen
}
