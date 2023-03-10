var sum1=[1,2,3,4,5,6]
var output=sum1
.filter(function(ele){
    return ele%3==0
})

.map(function(ele){
    return ele**3
})

.reduce(function(acc,currEl){
 return acc+currEl
})
console.log(output)