// Time Complexity O(n)
function reArrange(arr) {
  const result = [];
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] >= 0) {
      result.push(arr[i]);
    } else {
      result.unshift(arr[i]);
    }
  }
  return result;
}

// Time Complexity O(n)
function reArrange(arr) {
  const nag = arr.filter(value => value < 0); // O(n)
  const pos = arr.filter(value => value >= 0); // O(n)
  // return [...nag, ...pos];
  return nag.concat(pos);
}

// Time Complexity O(n)
function reArrange(arr) {
  const result = [];
  arr.forEach(value => { //O(n)
     if(value >= 0) {
      result.push(value);
    } else {
      result.unshift(value);
    }
  });
  return result;
}

// Rearranging in Place 
// Time Complexity O(n)
function reArrange(arr) {
  var leftMostPosEle = 0,
      tmp;
  for (var i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
          if (i != leftMostPosEle) {
              tmp = arr[i];
              arr[i] = arr[leftMostPosEle];
              arr[leftMostPosEle] = tmp;
          }
          leftMostPosEle += 1
      }
  }
  return arr;
}

console.log(reArrange([10, -1, 20, 4, 5, -9, -6]))