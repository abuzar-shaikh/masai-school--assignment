var amazon = [
    {name:"Speakers", price:5400, rating:4},
    {name:"headphones", price:3000, rating:3},
    {name:"playstation",price:20000, rating:5}
];
var suma=0;
var min=99999;
for(var i=0;i<amazon.length;i++){
console.log(amazon[i].name,amazon[i].rating);
suma=suma+amazon[i].rating;
if(amazon[i].price<min){
    min=amazon[i].price
}
}
console.log("Average Rating = "+suma/amazon.length);
console.log("minimum price =  "+min);