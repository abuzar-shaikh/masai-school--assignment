
let movieData=[

    {
        name:"The Last of Us",
        release_date:"04-Dec-2022",
        image_url:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWblPvrbLDV240ogX52d26a5zLeQZwoH2LXIqzAsCCHw&usqp=CAU&ec=48665701",
        IMDb_rating:"8.9",
    },

    {
        name:"John Wick Chapter 4",
        release_date:"24 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAxMS42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-qcryasajfx-portrait.jpg",
        IMDb_rating:9.2,
    },
    {
        name:"Tu Jhoothi Main Makkaar",
        release_date:"8 Mar, 2023",
        image_url:"https://m.media-amazon.com/images/M/MV5BMWQxYzVjNGQtYTNiZC00OWViLWFiNDktYzNhZWM5YjRmZWNhXkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        IMDb_rating:7.7,
    },
    {
        name:"Mrs. Chatterjee Vs Norway",
        release_date:"17 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mrs-chatterjee-vs-norway-et00319185-1679048055.jpg",
        IMDb_rating:8.1,
    },
    {
        name:"Bheed (Black & White)",
        release_date:"24 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/bheed-et00351618-1678280120.jpg",
        IMDb_rating:6.5,
    },
    {
        name:"Fast X",
        release_date:"19 May, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-ODUuNksgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00122562-nupburgjnm-portrait.jpg",
        IMDb_rating:9.5,
    },
    {
        name:"Bholaa",
        release_date:"29 Feb, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@like_202006280402.png,ox-24,oy-617,ow-29:ote-NjEuOEsgbGlrZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00326977-pperyhbynb-portrait.jpg",
        IMDb_rating:7.6,
    },
    {
        name:"Pathan",
        release_date:"10 Feb, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC4yLzEwICAzNjAuN0sgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00323848-vbmrbxlxmn-portrait.jpg",
        IMDb_rating:8.8,
    },
    {
        name:"RRR",
        release_date:"25 Mar, 2022",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC45LzEwICA5OTkuMUsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00094579-kxmfdwqkhn-portrait.jpg",
        IMDb_rating:7.1,
    },
    {
        name:"Avatar",
        release_date:"20 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC43LzEwICAyMjMuNEsgdm90ZXM%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00037264-bdbylvqqwb-portrait.jpg",
        IMDb_rating:8.3,
    },

]

localStorage.setItem("movies",JSON.stringify(movieData));

displaydata(movieData);

function sortdata(){
    var val=document.getElementById("select").value;

    if(val==""){
        movieData=JSON.parse(localStorage.getItem("movies"))
    }

    if(val==="lth"){
        movieData=movieData.sort(function(a,b){
            return a.IMDb_rating - b.IMDb_rating
        })
    }

    if(val==="htl"){
        movieData=movieData.sort(function(a,b){
            return b.IMDb_rating - a.IMDb_rating
        })
    }

    displaydata(movieData);


}

function displaydata(movieData){
    document.getElementById("movies").textContent=""

    movieData.map(function(elem,index){
        let div=document.createElement("div");
        div.setAttribute("id","imagediv");

        let image=document.createElement("img");
        image.setAttribute("src",elem.image_url);

        let databox=document.createElement("div")
        databox.setAttribute("id","boxdiv");

        let name=document.createElement("h2");
        name.textContent=elem.name;

        let release=document.createElement("h4");
        release.textContent="Release Date:- "+elem.release_date;

        let rating=document.createElement("h5");
        rating.textContent="IMDM Rating:-"+elem.IMDb_rating;

        let main=document.createElement("div");
        main.setAttribute("id","main")

        div.append(image);
        databox.append(name,release,rating);
        main.append(div,databox);
        document.getElementById("movies").append(main);
    })
}



function loadImage() {
    const images = [
      'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/shazam-fury-of-the-gods-et00312239-1678088844.jpg")',
      'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/demon-slayer-kimetsu-no-yaiba-to-the-swordsmith-village-et00354652-1678436346.jpg")',
      'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/kabzaa-et00315054-1675076687.jpg")',
      'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/everything-everywhere-all-at-once-et00337077-1675229806.jpg")',
  
      
    ];
  
    const slide = document.getElementById("slide");
    const bg = images[Math.floor(Math.random() * images.length)];
  
    slide.style.backgroundImage = bg;
  }
  
  setInterval(loadImage, 2000);

