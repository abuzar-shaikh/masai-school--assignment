var str=["assignment", "problem", "media", "upload"];
var output=str
.filter(function(elem,index){
    return elem.substring (0,1)==="a"||elem.substring (elem.length,elem.length-1)==="a"
})
.map(function(elem){
    return elem
})
console.log(output)