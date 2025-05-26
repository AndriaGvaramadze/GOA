function smallEnough(array, limit) {
  for (let num of array) {
    if (num > limit) {
      return false;
    }
  }
  return true;
}
