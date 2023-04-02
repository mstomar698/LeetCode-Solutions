/**
 * @param {number[][]} grid
 * @return {number}
 */
var projectionArea = function(grid) {
   let res =0;
   for(let i=0; i<grid.length; i++){
       let arr=[];
       res+= Math.max(...grid[i])
       for(let j=0; j<grid.length; j++){
           arr.push(grid[j][i])
           if(grid[i][j]>0){
               res++;
           }
       }
       res+=Math.max(...arr);
   } 
   return res;
};