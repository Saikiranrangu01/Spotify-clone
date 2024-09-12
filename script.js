//initialize the variables
let songIndex = 0;
let gifEl = document.getElementById("gif");
let audioEl = new Audio("audio/0.mp3");
let masterPlayEl = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");


let songItems = Array.from(document.getElementsByClassName("songItem"));

let timestamp = Array.from(document.getElementsByClassName("timestamp"));

let infoName = document.getElementById("infoName");
let songplay = Array.from(document.getElementsByClassName("songplay"));

let bannerphoto = document.getElementById("bannerphoto");
let container = document.getElementById("container");

let songs = [
    {
        songName: "Nippule Swasaga...",
        filePath: "audio/0.mp3",
        coverPath: "cover/0.jpg",
        number:1
    },
    {
        songName: "Mamathala thalli...",
        filePath: "audio/1.mp3",
        coverPath: "cover/1.jpg",
        number:2
    },
    {
        songName: "Jeevanadhi...",
        filePath: "audio/2.mp3",
        coverPath: "cover/2.jpg",
        number:3
    },
    {
        songName: "Dheevara...",
        filePath: "audio/3.mp3",
        coverPath: "cover/3.jpg",
        number:4
    },
    {
        songName: "Pachabottesina...",
        filePath: "audio/4.mp3",
        coverPath: "cover/4.jpg",
        number:5
    },
    {
        songName: "Manohari...",
        filePath: "audio/5.mp3",
        coverPath: "cover/5.jpg",
        number:6
    },
    {
        songName: "oka pranam...",
        filePath: "audio/6.mp3",
        coverPath: "cover/6.jpg",
        number:7
    },
    {
        songName: "dhandalayya...",
        filePath: "audio/7.mp3",
        coverPath: "cover/7.jpg",
        number:8
    },
    {
        songName: "Kanna nidhurinchara...",
        filePath: "audio/8.mp3",
        coverPath: "cover/8.jpg",
        number:9
    },
    {
        songName: "Hamsa nava...",
        filePath: "audio/9.mp3",
        coverPath: "cover/9.jpg",
        number:10
    }
  
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].textContent = songs[i].songName;
    element.getElementsByClassName("number")[0].textContent = songs[i].number;
})




//audioEl.play();


//Handle play/pause click
masterPlayEl.addEventListener("click",()=>{
    let firstSongId = document.getElementById(songIndex);
    if(audioEl.paused || audioEl.currentTime<=0){
        audioEl.play();
        masterPlayEl.classList.remove("fa-circle-play");
        masterPlayEl.classList.add("fa-circle-pause");
        masterPlayEl.style.color = "green";
        gifEl.style.opacity = 1;
        infoName.innerText = "nippule swasagaa...";

        bannerphoto.src = "cover/0.jpg";

        firstSongId.classList.remove("fa-circle-play");
        firstSongId.classList.add("fa-circle-pause");
  
    }
    else{
        audioEl.pause();
        masterPlayEl.classList.remove("fa-circle-pause");
        masterPlayEl.classList.add("fa-circle-play");
        masterPlayEl.style.color = "";
        gifEl.style.opacity = 0;

        
        firstSongId.classList.remove("fa-circle-pause");
        firstSongId.classList.add("fa-circle-play");

    }
    

})



audioEl.addEventListener("timeupdate",()=>{
    //update seekbar 
    progress = parseInt((audioEl.currentTime/audioEl.duration)*100);
    myProgressBar.value = progress;


})


myProgressBar.addEventListener("change",()=>{
    audioEl.currentTime = parseInt((myProgressBar.value * audioEl.duration)/100);
})




let previous = document.getElementById("back");
let next = document.getElementById("next");

    

const MakeAllPlays = ()=>{
    Array.from(document.getElementsByClassName("songplay")).forEach((element)=>{
        element.classList.remove("fa-circle-pause");
        element.classList.add("fa-circle-play");

       
        
        
    })
}
    
songplay.forEach((element)=>{
    element.addEventListener("click", (e)=>{
        songIndex = parseInt(e.target.id);
        MakeAllPlays();
        audioEl.src = `audio/${songIndex}.mp3`;
        bannerphoto.src = `cover/${songIndex}.jpg`;
        infoName.innerText = songs[songIndex].songName;
        audioEl.currentTime = 0;
        audioEl.play();
        gifEl.style.opacity = 1;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");
        masterPlayEl.classList.remove("fa-circle-play");
        masterPlayEl.classList.add("fa-circle-pause");

       


    })
})


//previous 

previous.addEventListener("click", ()=>{
    if(songIndex <= 0){
        songIndex = 0;

    }
    else{
        songIndex -= 1;
        
    }
    let songId = document.getElementById(songIndex);
        MakeAllPlays(); 

        songId.classList.remove("fa-circle-play");
        songId.classList.add("fa-circle-pause");

        audioEl.src = `audio/${songIndex}.mp3`;
        bannerphoto.src = `cover/${songIndex}.jpg`;

        infoName.innerText = songs[songIndex].songName;
        audioEl.currentTime = 0;
        audioEl.play();
        gifEl.style.opacity = 1;
        e.target.classList.remove("fa-circle-play");
        e.target.classList.add("fa-circle-pause");

        masterPlayEl.classList.remove("fa-circle-play");
        masterPlayEl.classList.add("fa-circle-pause");

    
})


// next 

next.addEventListener("click", (e)=>{

    if(songIndex >= 9){
        songIndex = 0;
    }
    else{
        songIndex += 1;
    }

    let songId = document.getElementById(songIndex);
    MakeAllPlays();
    songId.classList.remove("fa-circle-play");
    songId.classList.add("fa-circle-pause");

    
    audioEl.src = `audio/${songIndex}.mp3`;
    bannerphoto.src = `cover/${songIndex}.jpg`;
    infoName.innerText = songs[songIndex].songName;
    audioEl.currentTime = 0;
    audioEl.play();
    gifEl.style.opacity = 1;
    e.target.classList.remove("fa-circle-play");
    e.target.classList.add("fa-circle-pause");

    masterPlayEl.classList.remove("fa-circle-play");
    masterPlayEl.classList.add("fa-circle-pause");

})




