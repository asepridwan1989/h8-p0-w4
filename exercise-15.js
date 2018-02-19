function changeVocals (str) {
  //code di sini
  var vokal = 'aAiIuUeEoO'
  var konson = 'bBjJvVfFpP'
  var tampung ='';

  for (var i = 0; i<str.length;i++){
    var status = false;
    for(var j =0; j<vokal.length;j++){
      if(str[i] === vokal[j]){
        tampung += konson[j]
        status = true;
    }
    }if(status === false){
      tampung +=str[i];
    }
  }
  return tampung;

}

function reverseWord (str) {
  //code di sini
  var tampung ='';
  for(var i =str.length-1; i>=0;i--){
    tampung += str[i];
  }
  return tampung;
}

function setLowerUpperCase (str) {
  //code di sini
  var abjadLow = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var abjadUp = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  var tampung ='';
  for(i=0;i<str.length;i++){
    var status = false;
    for (j=0;j<26;j++){
      if(str[i] === abjadUp[j]){
        tampung += abjadLow[j];
        status = true;
      }else if(str[i] === abjadLow[j]){
        tampung += abjadUp[j];
        status = true;
      }
    }
    if(status === false){
      tampung += str[i];
    }
  }
  return tampung;
}

function removeSpaces (str) {
  //code di sini
  var tampung3 ='';
  for(i=0;i<str.length;i++){
    if(str[i] !== ' '){
      tampung3 += str[i];
    }
  }
  return tampung3;
}

function passwordGenerator (name) {
  //code di sini
  if(name.length <=5){
    return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
  var ganti = changeVocals(name);
//  console.log(ganti);
  var balik = reverseWord(ganti);
//  console.log(balik);
  var kapital = setLowerUpperCase(balik);
//  console.log(kapital);
  var remove = removeSpaces(kapital);
//  console.log(remove);
  return remove
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'
