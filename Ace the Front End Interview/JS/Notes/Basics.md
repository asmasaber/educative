- typeof NaN = 'number'

- 1/0 = **Infinity**

- **forEach returns undefined**

- It is a common misunderstanding that == only checks for the same value, whereas === also checks type. Technically, it is more accurate to say **== and === use the identical algorithm and work same in the backend**. The only difference is **== allows coercion in the equality comparison and === don’t**.

- In Javascript, a string can be broken into multiple lines using a backslash, ‘’ at the end of the first line.
This question might be asked in an entry level interview as follows: Is it possible to break JavaScript Code into several lines?
As an answer, you can mention breaking strings as well as how a break in a line that is not within a string is ignored by Javascript.

* The value returned from the **reducer function** is assigned to *the accumulator whose value is remembered through all iterations* and ultimately becomes the final single value returned.

---

## Arrow functions
### differs from other functions 
    - An arrow function does not have its own new.target property so it cannot be used as a constructor function.
      It cannot be called by new as there is no internal method [[Construct]] that allows it. They don’t have any prototype property either.
    - Is anonymous
    - Implicitly returns values
    - Inherits the value of this from its enclosing scope
  ### uses cases
    - Managing asynchronous code
    - Array manipulation
  ### should not for 
    - Creating methods on an object 
      Arrow functions should not be used to create object methods since they would create problems if you attempt to subclass/use this object as a prototype.
        const obj = { func: () => console.log(this) } // this refers to the global object
    - Dynamic binding of this
      Arrow functions bind the context statically

  ```js
  const button = document.querySelector('#pushy');
  button.addEventListener('click', () => {
      console.log(this); //`this` refers to window
      this.classList.toggle('on');
  });
  ```
---
### apply, call and bind
* **apply** requires an ***array*** as its second argument whereas 
* **call** requires the parameters to be listed ***explicitly*** 
* ***bind*** creates a new function whose ```this``` value can be set to the value provided during the function call, enabling the calling of a function with a specified ```this``` value (the first parameter to bind function).

```js
var obj = {
    name:"Tom"
};

var info = function(a,b,c){
    return this.name + " likes to eat " + a + " " + b + " and " +c;
};

//creates a bound function that has same body and parameters 
var bound = info.bind(obj,"Pasta"); 
console.log(bound("Donuts","Chips","Cake")); //calling the bound function later
``` 

**output** *Tom likes to eat Pasta Donuts and Chips*
  ```This is because the parameters following the first parameter to bind precede the arguments provided to the new function when it is invoked.```

---

## Closure
* function that can access the variables from another function’s scope.
* use cases
  * For Object Data Privacy
  * In Event Handlers
  * In Callback Functions
  * Currying
  
---

## Call Stack & Event Loop
1.  The interpreter reads the code line-by-line
2.  pushes each statement into the call stack one-by-one
3.  pops them once they execute
4.  if the statement is asynchronous, it is removed from the call stack and forwarded to the event table.
   
* ***call stack*** stores all your running JavaScript code
* ***event table/Web APIs*** responsible for moving the asynchronous code to the event queue after a specified time
* ***event queue*** Here the statement waits for execution.
* ***event loop*** 
  *  keeping check of both the call stack and the event queue
  *  check if the call stack is empty
  *  pops the statement from the event queue o the call stack to execute
  
  ![Event loop](https://www.educative.io/api/collection/10370001/6659404956958720/page/5287214965587968/image/5812838913277952?page_type=collection_lesson)


  ```js
  const array = [5, 11, 18, 25];
  for (var i = 0; i < array.length; i++) {
    setTimeout(function() {
      console.log('Element: ' + array[i] + ', at index: ' + i);
    }, 3000);
  }
  ```

## fix-1
  ***Changing ```var to let```*** changes the implementation so that the value of i is “held” until after the timeout finishes. 
  It creates a new binding (storage space) for each loop iteration; 
  each i refers to the binding of one specific iteration and preserves the value that was current at that time. 
  Previously, using var, a single binding was created for i, each loop iteration referred to the same binding hence returning the same value.

## fix-2
  using ```Clouser```

  ```js
  const array = [5, 11, 18, 25];
  for (var i = 0; i < array.length; i++) {
    setTimeout(function(local_i) {
    return function(){
    console.log('Element: ' + array[local_i] + ', at index: ' + local_i);
    }
  }(i), 3000);
  }
  ```
  ***```Note:```*** if we removed the ```return function()``` from the Clouser function becouse the ```setTimeout``` expects a ***```function```*** object as its first parameter.

---
***Spread Operator***### is used to create copies of arrays/objects
***Rest Operator*** is used to collect all the remaining values into an array

***Destructuring***
```js 
let { name: newName = 'default' } = { name: 'asma' };
// takes default value just in case undefined prop
```

```js
 const { collection: [, { name }]} = {collection: [{name: "Kelly",}, {name: "Anna",}],}
  name => Anna
```

```js
const obj = { 0: "a", 1: "b", length: 2 };
const [a, b] = obj;
// TypeError: obj is not iterable
```

```js
function removeFirstTwo(list) {
  const [,, ...arr] = list
  return arr
} 
=> remove the first two elements
```

***Destructuring dynamic properties***
```js 
let {[propertyName]: value } = object
```

***binding pattern as the rest property***

```js
const [a, b, ...[c, d]] = [1, 2, 3, 4];
// a, b, c, d => 1 2 3 4

const { a, ...{ b } } = { a: 1, b: 2 };
// SyntaxError: `...` must be followed by an identifier in declaration contexts

const { a, ...obj } = { a: 1, b: 2 };
// obj => { b: 2 }
```


```js
function returnNthCat(n){
  const state = {
    cats : [
        {catId : 1 , name : "tom"},
        {catId : 2 , name : "tiggy"},
        {catId : 3 , name : "leo"},
        {catId : 4 , name : "tommy"}
    ],
    curpage : 3
  }

  
  // const { cats: { [n]:thisCat}} = state;
  // we access the specific cat object in the array using indexing [n] and store it in the thisCat property.
  const { cats: { [n]: { name:thisCatName }}} = state;

  return thisCatName
}
console.log(returnNthCat(0)) // tom
console.log(returnNthCat(1)) // tiggy
console.log(returnNthCat(2)) // leo
console.log(returnNthCat(3)) // tommy
```

---
