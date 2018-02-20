function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var numString = String(angka);
  var total = 0;
  if (numString.length ===1)
    total= total + Number(numString);
  else
    total = kaliTerusRekursif(total + Number(numString[0]) * kaliTerusRekursif(Number(numString.slice(1))));
    return total;
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
