var sum1=[1,2,3,4]
.filter(function(ele){
    return ele%2!==0
})
.reduce(function(acc,currEl){
 return acc+currEl
})
console.log(sum1)
