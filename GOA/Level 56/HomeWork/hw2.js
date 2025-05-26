var isSquare = function(n){
  if (n < 0) return false;
  let root = Math.floor(Math.sqrt(n));
  return root * root === n;
}