/********* RECAP *******************8
Sudoku is a number-placement puzzle. 
The objective is to fill a 9 × 9 grid with numbers in such a way that each column, 
each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain 
all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents 
a valid Sudoku puzzle according to the layout rules described above. Note that the 
puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. 
Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.


*/
function sudoku2(grid) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            var c = grid[i][j];
            if (c !== '.') {
                // check row
                for (var z = 0; z < 9; z++) {
                    if (j !== z && grid[i][z] === c)
                        return false;
                }
                // check column
                for (var z = 0; z < 9; z++) {
                    if (i !== z && grid[z][j] === c)
                        return false;
                }
                // check square
                var a = i - i%3,
                    b = j - j%3;
                for (var x = a; x < a+3; x++) {
                    for (var y = b; y < b+3; y++) {
                        if (x !== i && y !== j && grid[x][y] === c)
                            return false;
                    }
                }
            }
        }
    }
    return true;
}
