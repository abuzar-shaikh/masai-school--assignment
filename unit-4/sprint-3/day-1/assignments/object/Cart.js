var data=[{name:"Rice",quantity:2,price:60},
{name:"Dal",quantity:3,price:50},
{name:"Salt",quantity:1,price:"20"},];

var sum=0;
for(var i=0;i<data.length;i++){
    var multi=data[i].quantity*data[i].price;
    sum=sum+multi;
}
console.log(sum);
