var e_commerce=[{products:"earphone",quantity:4,price:700},
  {products:"headphone",quantity:3,price:800},
  {products:"earpods",quantity:2,price:1000}];
  
  
var sum=0;
  for(var i=0;i<e_commerce.length;i++){
    var multi=e_commerce[i].quantity*e_commerce[i].price;
    sum=sum+multi;
  }
  console.log(sum);