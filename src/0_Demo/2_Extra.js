function solution(arr, x) {
  const xIndexes = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      xIndexes.push(i);
    }
  }

  const lastIndex = xIndexes[xIndexes.length - 1];
  const rightCount = arr.length - lastIndex - 1;

  return lastIndex + 1 + (xIndexes.length - rightCount) * -1;
}
