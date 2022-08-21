# Time Complexity
- **Binary search**  `O(logn)`
- most popular ***sorting*** functions take `O(nlogn)`
- ***indexOf*** & ***findIndex*** `O(n)`
- update array on place will make The ***space complexity is constant***.



# Array Methodes:-
* `splice()` changes the original array whereas `slice()` doesn't but ***both of them returns array object***.

> ***splice*** (*start*, *deleteCount?*, *item1, …, itemN?*)
> A ***negative start*** will begin that many elements from the end of the array.
> A ***deleteCount is 0 or negative*** no elements are removed.

```js
  var array = [1,2,3,4,5];
  console.log(array.splice(2)); // [3, 4, 5]
  console.log(array); // [1, 2]
```

> ***slice*** (*start*, *end?*)
> A ***negative index*** can be used, indicating an offset from the end of the sequence.

```js
  var array = [1,2,3,4,5]
  console.log(array.slice(2)); // [3, 4, 5]
  console.log(array); //[1,2,3,4,5]
```

* **`forEach`** returns ***undefinde***
* ***`indexOf`*** & ***`findIndex`***
  > **findIndex** accepts a ***callback*** as an argument
  > **indexOf** accepts a ***value*** as an argument.

* ***`concat`***
```js
  arr1.concat(arr2) => [...arr1, arr2];
```

* ***`filter`*** takes callback that apply conditional statement on each item and return *==just items pass==* the condition

* ***`map`*** return A new array *with ==each element== being the result of the callback function*.
  
* ***`join`*** return string with array alements concatened with spacific delimiter *by default ','*

* ***`reverse`*** return reversed array 

* ***`some`*** tests whether ==*at least one element*== in the array passes the test implemented by the provided function

* ***`every`*** tests whether ==*all elements*== in the array passes the test implemented by the provided function

* ***`at`*** returns the item at that index, *==Negative integers count back==* from the last item in the array.
* ***`flat`*** creates a new array with all *==sub-array elements concatenated into it==* recursively up to the specified depth

```js
  const arr = [0, 1, 2, [[[3, 4]]]];
  // console.log(arr.flat()); // [0, 1, 2, [[3, 4]]];
  // console.log(arr.flat(2)); // [0, 1, 2, [3, 4]];
  console.log(arr.flat(3)); // [0, 1, 2, 3, 4];
```
# Use cases
* insert item in specific index in array 

```js
  function insertAt(array, index, ...elements) {
    array.splice(index, 0, ...elements);
  }
```
* return new array starting from specific index from another array 
```js
  items.slice(fromIndex);
```

* get the second element from back 
```js
  const arr = [1, 2, 3, 4, 5];
  console.log(arr.at(-2)); // 4
```