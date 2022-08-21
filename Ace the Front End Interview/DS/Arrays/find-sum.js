// Brute Force
// Time complexity O(n^2)
function findSum(arr, value) {
  for (var j =0; j<arr.length; j++) {  // O(n)
     for (var k = j+1; k<arr.length; k++) {  // O(n)
          if ((arr[j] + arr[k]) == value)
              return [arr[j], arr[k]]
      }
  }
  return false;
}

// Time complexity O(n^2)
function findSum(arr,value){
  for(let i = 0; i < arr.length; i++) { // O(n)
      const index = arr.indexOf(value - arr[i]); // O(n)
      if(index !== -1) {
        return [arr[i], arr[index]];        
      }
  }

  return false;
}

// Sorting the Array
// Replacing indexOf O(n) by Binary search O(logn)
// Time complexity O(nlogn)
function findSum(arr,value){
  arr.sort((a, b) => a - b);
  for(let i = 0; i < arr.length; i++) { // O(n)
      const index = binarySearch(arr, value - arr[i]); // O(logn) 
      if(index) {
        return [arr[i], arr[index]];        
      }
  }

  return false;
}

function binarySearch(arr, item){
  var first = 0, mid;
  var last = arr.length - 1;
  var found = false
  var arrayIndex = -1
  while( (first <= last) && !found){
      mid = Math.floor((first + last) / 2)
      if( arr[mid] == item){
          arrayIndex = mid
          found = true
      }
      else{
          if(item < arr[mid])
              last = mid - 1
          else
              first = mid + 1
      }
  }
  if (found)
       return arrayIndex
   else
       return false
}


// Moving indices
// Time complexity O(nlogn)
function findSum(arr, value) {
  arr.sort((a, b) => a - b); // O(nlogn)
  let index1 = 0,
      index2 = arr.length -1,
      sum = 0;

  while(index1 != index2) {
    sum = arr[index1] + arr[index2];
    if(sum < value) {
      index1++;
    } else if(sum > value){
      index2--;
    } else {
      return [arr[index1], arr[index2]];
    }
  }
  return false;
}

console.log(findSum([1,2,3,4],5))
console.log(findSum([4,3,2,1],9))