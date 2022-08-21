// Time Complexity O(n^2)
function findFirstUnique(arr) {
  for(let i = 0; i < arr.length; i++) { // O(n)
     if(arr.indexOf(arr[i], i + 1) === -1) { // O(n)
        return arr[i];
     }
  }
  return null;
}


// Time Complexity O(nlogn)
function findFirstUnique(arr) {
  for(let i = 0; i < arr.length; i++) { // O(n)
     if(!binarySearch(arr, arr[i], i + 1)) { // O(logn)
        return arr[i];
     }
  }
  return null;
}


function binarySearch(items, item, fromIndex = 0){
  const arr = items.slice(fromIndex);
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