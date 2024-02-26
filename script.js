let title = document.getElementById('title');
let singer = document.getElementById('singer');
let prev = document.getElementById('prev-btn');
let playPause = document.getElementById('play-btn');
let next = document.getElementById('next-btn');
let audio_volume = document.getElementById('audio-range');
let audio = document.getElementById('audio');
let poster = document.getElementById('album-img');

let songs = [
    {
        name: "Lauv - I like me better",
        title: "I Like Me Better",
        artist: "Lauv",
        ImgSrc:"https://upload.wikimedia.org/wikipedia/en/1/1b/Lauv_-_I_Like_Me_Better.png",

    },
    {
        name: "Dharia - Sugar & Brownies",
        title: "Sugar & Brownies",
        artist: "Dharia",
        ImgSrc: "https://p16-tm-sg.tiktokmusic.me/img/tos-alisg-v-2102/7ca570e4661b4e36a401117909098357~c5_500x500.image",
    },
    {
        name: "Post Malone - Sunflower",
        title: "Sunflower",
        artist: "Post Melone",
        ImgSrc:"https://i1.sndcdn.com/artworks-C9Iaa8IBy9cQ064Y-VsPIHg-t500x500.jpg",
    },
];

let isPlaying = false;

let playMusic =()=>{
    isPlaying = true;
    audio.play();
    playPause.classList.replace('fa-play', 'fa-pause');
    poster.style.animationPlayState = 'running';
};

let pauseMusic =()=>{
    isPlaying = false;
    audio.pause();
    playPause.classList.replace('fa-pause','fa-play');
    poster.style.animationPlayState = 'paused';
};

playPause.addEventListener("click",()=>{
    if(isPlaying){
        pauseMusic();
       
    }else{
        playMusic();
        
    }
});

const loadSongs=(songs)=>{
    title.textContent = songs.title;
    singer.textContent = songs.artist;
    audio.src = "/Music player/Songs/" + songs.name + ".mp3";
    poster.src = songs.ImgSrc;
}

let songIndex = 1;

const nextSong =()=>{
    songIndex = (songIndex +1 ) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
};

const prevSong = () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click",prevSong);

function setVolume(){
    audio.volume = audio_volume.value /100;
}

audio_volume.addEventListener("input",setVolume);

audio.addEventListener('volumechange', () => {
    audio_volume.value = audio.volume * 100;
});

