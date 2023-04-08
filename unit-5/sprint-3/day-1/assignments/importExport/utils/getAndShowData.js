async function getData(url){
    try{
        let res=await fetch(url);
        let data=await res.json();
        return data;

    } catch(err){
        console.log(err);
    }
}

function appendData(data, data2){
    data.forEach((el)=>{
let div=document.createElement("div");

let p=document.createElement("h1");
p.textContent=el.title;

let image=document.createElement("img");
image.src=el.image;

let desc=document.createElement("p");
desc.textContent=el.description;

div.append(p,image,desc);

data2.append(div);


    });
}

export{getData,appendData}

pare