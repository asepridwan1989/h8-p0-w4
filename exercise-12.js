function shoppingTime(memberId, money) {
  // you can only write your code here!
  if(memberId === '' ||memberId === undefined){
   return 'Mohon maaf, toko X hanya berlaku untuk member saja';
  }if(money < 50000){
    return 'Mohon maaf, uang tidak cukup';
  }
  var belanjaan = {};
  belanjaan.memberId = memberId;
  belanjaan.money = money;
  var orderan =[ 'Sepatu Stacattu', 'Baju Zoro', 'Baju H&N', 'Sweater Uniklooh', 'Casing Handphone' ];
  var purchased = [];
  for(var i =0; i<5; i++){
    if(money>=1500000){
      purchased.push(orderan[0]);
      money = money - 1500000;
    }else if(money>=500000){
      purchased.push(orderan[1]);
      money = money - 500000;
    }else if(money>=250000){
      purchased.push(orderan[2]);
      money = money - 250000;
    }else if(money>=175000){
      purchased.push(orderan[3]);
      money = money - 175000;
    }else if(money>=50000){
      purchased.push(orderan[4]);
      money = money - 50000;
      break;
    }
  }
  belanjaan.listPurchased = purchased;
  belanjaan.changeMoney = money;
  return belanjaan;

}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
//{ memberId: '82Ku8Ma742',
// money: 170000,
// listPurchased:
//  [ 'Casing Handphone' ],
// changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja
