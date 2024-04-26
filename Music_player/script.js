import { songs } from "./playlist.js";


const content = document.querySelector(".cont-2");
const Playimage = content.querySelector(".play-img");
const musicName = content.querySelector(".head-title");
const musicArtist = content.querySelector(".art-name");
const Audio = content.querySelector(".main-song");
const prevBtn = content.querySelector("#backward");
const nextBtn = content.querySelector("#forward");
const playBtn = content.querySelector(".play-pause1");
const playBtnIcon = content.querySelector(".play-pause1 i");
const repeatBtn = content.querySelector("#repeat");
const shuffle = content.querySelector("#shuffle");


let index = 1;

window.addEventListener("load", ()=>{
    loadData(index);
})

function loadData(indexValue){
    musicName.innerHTML = songs[indexValue -1].name;
    musicArtist.innerHTML = songs[indexValue - 1].name;
    Playimage.src = "images/"+songs[indexValue -1].img+".jpg";
    Audio.src = "music/"+songs[indexValue - 1].audio+".mp3";
}

playBtn.addEventListener("click", ()=> {
    const isMusicPaused = content.classList.contains("paused");
    if(isMusicPaused){
        pauseSong();
    }
    else{
        playSong();
    }
});

function playSong(){
    content.classList.add("paused");
    playBtnIcon.innerHTML = "pause";
    Audio.play();
}

function pauseSong(){
    content.classList.remove("paused");
    playBtnIcon.innerHTML = "play_arrow";
    Audio.pause();
}


// 



nextBtn.addEventListener("click", ()=> {
    nextSong();
})

prevBtn.addEventListener("click", () => {
    prevSong();
})

function nextSong(){
    index++;
    if(index > songs.length){
        index = 1;
    } else {
        index = index
    }
    loadData(index);
    playSong();
}

function prevSong(){
    index--;
    if(index <= 0){
        index = songs.length
    } else {
        index = index
    }
    loadData(index);
    playSong();
}

shuffle.addEventListener("click", ()=> {
    var randIndex = Math.floor(Math.random()*songs.length)+1;
    loadData(randIndex);
    playSong();
})



Audio.addEventListener("ended", ()=>{
    index++;
    if(index > songs.length){
        index = 1;
    }
    loadData(index);
    playSong();
})