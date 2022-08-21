// Time Complexity O(n)
function rightRotate(arr,n){
  const r = [...arr];
  return r.splice(arr.length - n).concat(r);
}

rightRotate([1,2,3,4,5], 2);
rightRotate([300,-1,3,0], 3);
rightRotate([0,0,0,2], 4);