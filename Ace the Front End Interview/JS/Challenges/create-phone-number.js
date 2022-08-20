function createPhoneNumber(arr) {
  const first = arr.slice(0, 3);
  const second = arr.slice(3, 6);
  const last = arr.slice(6);
  return `(${first.join('')}) ${second.join('')}-${last.join('')}`;
}

createPhoneNumber([1,2,3,4,5,6,7,8,9,0]); // (123) 456-7890
createPhoneNumber([3,5,7,1,2,0,9,8,6,4]); // (357) 120-9864