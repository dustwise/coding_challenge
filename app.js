//CONSTANTS AND EXPORT OF CONSTANTS
const MIN_GRID_SIZE = 5;
const MAX_GRID_SIZE = 250;
module.exports.min = MIN_GRID_SIZE;
module.exports.max = MAX_GRID_SIZE;

module.exports.application = function(size, seed) {
  //CHECK SIZE VALIDITY
  if(!size){
    return 'Please, at a minimum, provide a grid size.';
  }

  if(typeof size !== 'number'){
    return 'Please provide a valid grid size.';
  }

  if(typeof size === 'number' && (size < MIN_GRID_SIZE || size > MAX_GRID_SIZE)){
    return `Currently this app only supports grid sizes from ${MIN_GRID_SIZE} to ${MAX_GRID_SIZE}. Please provide a valid size.`;
  }

  //CHECK SEED VALIDITY
  if(seed){
    const malformedRow = seed.some(row => {
      return row.length > size || row.length < size;
    });

    const invalidCell = seed.some(row => {
      return row.some(cell => cell > 1 || cell < 0);
    });

    if(seed.length < MIN_GRID_SIZE || seed.length > MAX_GRID_SIZE){
      return `Currently this app only supports grid sizes from ${MIN_GRID_SIZE} to ${MAX_GRID_SIZE}. Please provide a valid seed.`;
    }

    if(malformedRow){
      return 'The amount of columns must equal the amount of rows.';
    }

    if(invalidCell){
      return 'Cells should be set to 1 or 0.';
    }
  }

  //GENERATE INITIAL GRID BASED ON PROVIDED SIZE

  const initialGrid = generateGrid(size);

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

  //RUN LIFE CYCLE 

  function updateGrid(current){
    let newGrid = current.map((row, rowIndex) => {

      return row.map((cell, cellIndex) => {
        const cellIsAlive = cell;
        const above = getNeighbors(current[rowIndex - 1], cellIndex);
        const below = getNeighbors(current[rowIndex + 1], cellIndex);
        const immediate = [ row[cellIndex - 1], row[cellIndex + 1]];
        const aliveNeighbors = immediate.concat(above, below).filter(neighbor => neighbor === 1).length;

        if(cellIsAlive){
          return aliveNeighbors >= 2 && aliveNeighbors <= 3 ? 1 : 0;
        } else {
          return aliveNeighbors === 3 ? 1 : 0;
        }
      });

    });

    return newGrid;
  }

  function getNeighbors(row, cellIndex){
    return row ? row.slice(cellIndex === 0 ? 0 : cellIndex - 1, cellIndex + 2) : [];
  }


  return seed ? updateGrid(seed) : updateGrid(initialGrid);
}
