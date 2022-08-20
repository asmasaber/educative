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