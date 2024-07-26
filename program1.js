const getTotalIsles = function (grid) {


  // write your code here
  if(grid.length===0)return0;
  let count = grid.length;
  const cols = grid[0].length;
 function DataTransfer(r,c){
  if(r<0||c<0||r>=rows||c>=cols||grid[r][c]=='W'){
    return;
  }
  grid[r][c]='W';
  DataTransfer(r-1,c);
  DataTransfer(r+1,c);
  DataTransfer(r,c-1);
  DataTransfer(r,c+1);
 }
for(let i=0;i<rows; i++){
  for(let j=0; j<cols; j++){
    if(grid[i][j]==='L'){
      DataTransfer(i,j);
      count++;
    }
  }
}
return count;
};

module.exports = getTotalIsles;
