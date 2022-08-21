// Time Complexity O(n+m), where n and m are the lengths of arr1 and arr2
function mergeArrays(arr1, arr2) {
  const result = [];
  while (arr1.length && arr2.length) {
      arr1[0] < arr2[0] ? result.push(arr1.shift()) : result.push(arr2.shift()) 
  }

  return [...result, ...arr1, ...arr2];
}

// Time Complexity => O(nlogn) ince we are using the sort() function.
function mergeArrays(arr1, arr2) {
  return [...arr1, ...arr2].sort((a, b) => a - b);
}

console.log(mergeArrays([4,5,6],[-2,-1,0,7]))