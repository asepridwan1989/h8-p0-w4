function getTotal(arrNumber) {
  // code di sini
  if(arrNumber[0] === undefined){
    return '';
  }
  var length = arrNumber.length;
  var count = 1;
  for(var i = 1; i < length;i++){
    if(arrNumber[i] === arrNumber[0]){
      count++;
    }else{
      return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + count +' kali';
    }
  }
  return 'angka paling besar adalah ' + arrNumber[0] + ' dan jumlah kemunculan sebanyak ' + count +' kali';
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);
//  console.log(listSort);
  var countHighest = getTotal(listSort);
//  console.log(countHighest);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''
