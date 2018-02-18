function countProfit(shoppers) {
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];

  // you can only write your code here!
  if(shoppers[0] === undefined){
    return [];
  }
  var sepatu = {};
  var sepatuShopper = [];
  var sepatuAmount = 0;
  var sepatuStok = listBarang[0][2];
  var baju = {};
  var bajuShopper = [];
  var bajuAmount = 0;
  var bajuStok = listBarang[1][2];
  var sweater = {};
  var sweaterShopper = [];
  var sweaterAmount = 0;
  var sweaterStok = listBarang[2][2];
  var result = [];
  for (var i = 0; i < 3; i++){
    for(var j = 0; j < shoppers.length; j++){
      if (i === 0){
        sepatu.product = listBarang[i][0];
        if (shoppers[j].product === 'Sepatu Stacattu'){
          if (shoppers[j].amount <= sepatuStok && shoppers[j].amount >0 ){
              sepatuShopper.push(shoppers[j].name);
              sepatuAmount = sepatuAmount + shoppers[j].amount;
              sepatuStok = sepatuStok - shoppers[j].amount;
          }
        }
        sepatu.shoppers = sepatuShopper;
        sepatu.leftOver = sepatuStok;
        sepatu.totalProfit = listBarang[0][1]*sepatuAmount;
      }else if (i === 1){
        baju.product = listBarang[i][0];
        if (shoppers[j].product === 'Baju Zoro'){
          if (shoppers[j].amount <= bajuStok && shoppers[j].amount >0 ){
              bajuShopper.push(shoppers[j].name);
              bajuAmount = bajuAmount + shoppers[j].amount;
              bajuStok = bajuStok - shoppers[j].amount;
          }
        }
        baju.shoppers = bajuShopper;
        baju.leftOver = bajuStok;
        baju.totalProfit = listBarang[1][1]*bajuAmount;
      }else if (i === 2){
        sweater.product = listBarang[i][0];
        if (shoppers[j].product === 'Sweater Uniklooh'){
          if (shoppers[j].amount <= sweaterStok && shoppers[j].amount >0 ){
              sweaterShopper.push(shoppers[j].name);
              sweaterAmount = sweaterAmount + shoppers[j].amount;
              sweaterStok = sweaterStok - shoppers[j].amount;
          }
        }
        sweater.shoppers = sweaterShopper;
        sweater.leftOver = sweaterStok;
        sweater.totalProfit = listBarang[2][1]*sweaterAmount;
      }
    }
  }
//  console.log(shoppers[0]);
  result.push(sepatu,baju,sweater);
  return result;
}

// TEST CASES
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
//   totalProfit: 0 } ]

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]
console.log(countProfit([])); //[]
