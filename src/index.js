
// You should implement your task here.

module.exports = function towelSort (arr) {
  if (arr == undefined) {
    return [];
  }
    return arr.reduce((acc, cur, i) => {
       if (i%2 === 0) {
         acc.push(cur);
       }
       else {
         acc.push(cur.reverse());
       }
       return acc.flat();
     }, []);
     }
  