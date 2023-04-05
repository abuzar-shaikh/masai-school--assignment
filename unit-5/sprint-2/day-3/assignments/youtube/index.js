const API_KEY="AIzaSyCXcoH4o1AA4UM_TluHhmyvykkO_thRtB0";

let searchresultdiv=document.getElementById("container");
// for sarch input
async function searchVideo(){
    let input=document.getElementById("searchParam").value;
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&type=video&key=${API_KEY}`)

    data=await data.json();
    console.log(data)
    let response=data.items;
    displaydata(response);
}

// for auto load
window.onload=async()=>{
    let input="most popular vidios in India"
    let data= await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${input}&type=video&key=${API_KEY}`)

    data= await data.json();
    console.log(data)
    let response=data.items;
    console.log(data.items)
    displaydata(response);
}



function displaydata(response){
    container.textContent="";
    response.forEach(
        ({
            id:{videoId},
            snippet:{
                title,
                thumbnails:{
                    medium:{ url },
                },
            },
        })=>{
            let videodiv=document.createElement("div");
       
       let frame=document.createElement("iframe");
       frame.src=`https://www.youtube.com/embed/${videoId}`;
       frame.width="100%";
       frame.height="300px"

       let name=document.createElement("b");
       name.textContent=`${title}`

       videodiv.append(frame,name);
       container.append(videodiv);

        }
    )
}