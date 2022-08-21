// Time Complexity O(n^2)
const multiply = (arr) => arr.reduce((acc, cur) => acc * cur, 1);
function findProduct(arr) {
    const result = [];
    for(let i = 0; i < arr.length; i++) { // O(n)
        const nArr = [...arr];
        nArr.splice(i, 1);
        result.push(multiply(nArr)); // O(n)
    }
    return result;
}


// Time Complexity O(n)
function findProduct(arr) {
  var temp = 1,
      product = [];
  for (var i = 0; i < arr.length ; i++) {
      product[i]  = temp;
      temp = temp * arr[i];
  }

  temp = 1;
  for (var i = arr.length - 1; i > -1; i--) {
      product[i] *= temp;
      temp *= arr[i];
  }

  return product
}

console.log(findProduct([1,3,4,5]))