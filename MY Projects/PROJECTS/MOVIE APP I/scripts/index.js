let movieArr=[
    {
        name:"John Wick Chapter 4",
        release_date:"24 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OS41LzEwICAxMS42SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00311714-qcryasajfx-portrait.jpg",
        IMDb_rating:9.2,
    },
    {
        name:"Tu Jhoothi Main Makkaar",
        release_date:"8 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ny44LzEwICA3NC45SyB2b3Rlcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00347237-wmnztybfrl-portrait.jpg",
        IMDb_rating:7.7,
    },
    {
        name:"Mrs. Chatterjee Vs Norway",
        release_date:"17 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-OC44LzEwICA4LjVLIHZvdGVz,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00319185-recfcktmbq-portrait.jpg",
        IMDb_rating:8.1,
    },
    {
        name:"Bheed (Black & White)",
        release_date:"24 Mar, 2023",
        image_url:"https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:oi-discovery-catalog@@icons@@star-icon-202203010609.png,ox-24,oy-615,ow-29:ote-Ni4xLzEwICBOZXcgUmVsZWFzZQ%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-70:q-80/et00351618-cbzlnvyhnb-portrait.jpg",
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
];


localStorage.setItem("arr123",JSON.stringify(movieArr));

displayMovie(movieArr);

function sortFun(){
    var select=document.getElementById("select").value;
       
    if(select===""){
       
        movieArr=JSON.parse(localStorage.getItem("arr123"));

    }
    if(select==="htl"){
        movieArr=movieArr.sort(function(a,b){
            return b.IMDb_rating - a.IMDb_rating;
        })
       
    }

    if(select==="lth"){
        movieArr=movieArr.sort(function(a,b){
            return a.IMDb_rating - b.IMDb_rating;
        })
        
    }
    displayMovie(movieArr);
   
};


function displayMovie(movieArr){

    document.getElementById("movies").textContent=""
    movieArr.map(function(elm){

     let box=document.createElement("div");
     box.setAttribute("id","box");

     let image=document.createElement("img");
     image.setAttribute("id","image");
     image.setAttribute("src",elm.image_url);

     let name=document.createElement("h3");
     name.setAttribute("id","name");
     name.textContent=elm.name;

     let date=document.createElement("p");
     date.setAttribute("id","date");
     date.textContent=elm.release_date;

     let ratingBox=document.createElement("div");
     ratingBox.setAttribute("id","ratingBox");

     let IMDB=document.createElement("B");
     IMDB.setAttribute("id","IMDB");
     IMDB.textContent="IMDb rating : "


     let rating=document.createElement("b");
     rating.setAttribute("id","rating");
     rating.textContent=elm.IMDb_rating;


    //  appending

    ratingBox.append(IMDB,rating)

    box.append(image,name,date,ratingBox)

    document.getElementById("movies").append(box);

    })


};


function loadImage(){

       const images=[
        'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/bholaa-et00326977-1679319423.jpg")',

        'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/john-wick-chapter-4-et00311714-1679379542.jpg")',

        'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/tu-jhoothi-main-makkaar-et00347237-1675065103.jpg")',

        'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/fast-x-et00122562-1679316138.jpg")',

       'url("https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/rrr-et00094579-12-05-2022-02-26-04.jpg")',
       ]

      const slide= document.getElementById("slide");
      const bg= images[Math.floor(Math.random()* images.length)];
      
      slide.style.backgroundImage=bg;
    
}


setInterval(loadImage,800);
