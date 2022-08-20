const getIndex_v1 = (arr, number) => {
  const sortedArray = arr.sort((a, b) => a - b);
  for(let i = 0; i < sortedArray.length; i++) {
      if(number <= sortedArray[i])
          return i; 
  }
}

// we count the values in arra that smaller than the number we want to insert
// counter is the number of values in arr that smaller than the number we want to insert 
const getIndex_v2 = (arr, number) =>
    arr.reduce((counter, curr) => (number > curr ? ++counter : counter), 0);

getIndex_v1([10,5,1,3], 2); // 1
getIndex_v1([16,4,5], 13); // 2

getIndex_v2([10,5,1,3], 2);  // 1
getIndex_v2([16,4,5], 13); // 2