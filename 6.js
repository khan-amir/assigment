function missingNumber(arr){
  let missingArray = [];

  let minNum = Math.min(...arr);
  let maxNum = Math.max(...arr);

  for (let i = minNum; i < maxNum; i++){
      if(arr.indexOf(i) < 0){
        missingArray.push(i);
      }
  }
  return missingArray;
}

console.log(missingNumber([1,3,5,6]));
   