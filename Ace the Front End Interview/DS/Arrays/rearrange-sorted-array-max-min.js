// Time Complexity O(n)
function maxMin(arr){
  const result = [];
  const half = Math.floor(arr.length / 2);
  const firstPart = arr.slice(0, half);
  const secondPart = arr.slice(half);
  for(let i = 0; i < arr.length; i++) {
    const isEven = i%2 === 0;
    if(isEven) {
      result.push(secondPart.pop());
    } else {
      result.push(firstPart.shift());
    }
  }
  return result;
}

// Two pointers
// Time Complexity O(n)
function maxMin(arr){
  const result = [];
  let pointer1 = 0,
      pointer2 = arr.length -1;
  let i = 0;
  while(i < arr.length) {
    const isEven = i%2 === 0;
    if(isEven) {
      result.push(arr[pointer2]);
      pointer2--;
    } else {
     result.push(arr[pointer1]);
      pointer1++;
    }
    i++;
  }
  return result;
}

// Rearrange In Place
// The space complexity is constant.
// Time Complexity O(n)
function maxMin(arr){
  const loops = Math.floor(arr.length / 2);
  let insertIndex = 0;
  for(let i = arr.length -1 ; i > loops; i--) { // O(n)
    insertAt(arr, insertIndex, arr.pop());
    insertIndex +=2;
  }
  return arr;
}

function insertAt(array, index, ...elements) {
  array.splice(index, 0, ...elements);
}

console.log(maxMin([1,2,3,4,5,6,7])); // [7,1,6,2,5,3,4]
console.log(maxMin([1,2,3,4,5])); // [5,1,4,2,3]
