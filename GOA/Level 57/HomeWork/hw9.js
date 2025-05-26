function findNextSquare(sq) { 
  let root = Math.sqrt(sq);

  if (Number.isInteger(root)) {
    let nextRoot = root + 1;
    return nextRoot * nextRoot;
  } else {
    return -1;
  }
}
  
  
