import { songs } from "./playlist"; 

const content = document.querySelector(".content"),
Playimage = content.querySelector(".music-image img"),
musicName = content.querySelector(".music-titles .name"),
musicArtist = content.querySelector(".music-titles .artist"),
Audio = content.querySelector(".main-song"),
playBtn = content.querySelector(".play-pause"),
playBtnIcon = content.querySelector(".play-pause span"),
prevBtn = content.querySelector("#prev"),
nextBtn = content.querySelector("#next"),
progressBar = content.querySelector(".progress-bar"),
progressDetails = content.querySelector("progress-details");



let index = 1;

window.addEventListener("load", ()=>{
    loadData(index);
});

function loadData (indexValue){
    musicName.innerHTML = songs[indexValue - 1].name;
    musicArtist.innerHTML = songs[indexValue - 1].nmae;
    Playimage.src = "images/"+songs[indexValue -1].img+".jpg";
    Audio.src = "music/"+songs[indexValue - 1].audio+".mp3"; 
}

playBtn.addEventListener("click",()=>{
    const isMusicPaused = content.classList.contains ("paused");
    if (isMusicPaused) {
        pauseSong();
    }
    else{
        playSong();
    }
});

function playSong(){
    content.classList.add("paused");
    playBtnIcon.innerHTML = "play_arrow";
    Audio.play();
}

function pauseSong() {
    content.classList.remove("paused");
    playBtnIcon.innerHTML = "play_arrow";
    Audio.pause();
}

nextBtn.addEventListener("click",()=>{
    nextSong();
});

prevBtn.addEventListener("click", ()=>{
    prevSong();
});
songs[0]
function nextSong(){
    index++;
    if (index > songs.length) {
        index = 1;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

function prevSong(){
    index--;
    if (index <= 0) {
        index = songs.length;
    }
    else{
        index = index;
    }
    loadData(index);
    playSong();
}

