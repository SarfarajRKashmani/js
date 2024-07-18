const songs = [
    {
      title: "Apna Bana Le",
      src: `./Audio/3.mp3`,
      image: `./Images/3.jpg`,
    },
    {
      title: "Give Me Some Sunshine",
      src: "./Audio/4.mp3",
      image: `./Images/4.jpg`,
    },
    {
      title: "Kesariya",
      src: "./Audio/5.mp3",
      image: `./Images/5.jpg`,
    },
    {
      title: "Teri Mitti",
      src: "./Audio/1.mp3",
      image: `./Images/1.jpg`,
    },
    {
      title: "Lehra Do",
      src: "./Audio/6.mp3",
      image: `./Images/6.jpg`,
    },
    {
      title: "Ludovico Einaudi - Experience",
      src: "./Audio/2.mp3",
      image: `./Images/2.jpg`,
    },
    {
      title: "Mann meri",
      src: "./Audio/7.mp3",
      image: `./Images/7.jpg`,
    },
    {
      title: "Manzar hai yeh naya",
      src: "./Audio/8.mp3",
      image: `./Images/8.jpg`,
    },
    {
      title: "Saudebazi",
      src: "./Audio/9.mp3",
      image: `./Images/9.jpg`,
    },
    {
      title: "Shaabaashiyaan",
      src: "./Audio/10.mp3",
      image: `./Images/10.jpg`,
    },
  ];


  let currentSongIndex = 0;
  let isPlaying = false;
  let isRepeat = false;
  let isShuffle = false;
  
  const audio = new Audio();
  const playPauseBtn = document.getElementById("play-pause");
  const prevBtn = document.getElementById("prev");
  const nextBtn = document.getElementById("next");
  const repeatBtn = document.getElementById("repeat");
  const shuffleBtn = document.getElementById("shuffle");
  const currentSongTitle = document.getElementById("current-song");
  const songImage = document.getElementById("song-image");
  const playlist = document.querySelector(".playlist");
  const progressBar = document.getElementById("progress-bar");
  const progressContainer = document.querySelector(".progress-container");
  
  function loadSong(index) {
    audio.src = songs[index].src;
    currentSongTitle.textContent = songs[index].title;
    songImage.src = songs[index].image;
    document
      .querySelectorAll(".playlist li")
      .forEach((li) => li.classList.remove("active"));
    document.querySelectorAll(".playlist li")[index].classList.add("active");
  }
  
  function playSong() {
    audio.play();
    isPlaying = true;
    playPauseBtn.innerHTML = '<i class="fas fa-pause"></i>';
    playPauseBtn.classList.replace("btn-success", "btn-danger");
  }
  
  function pauseSong() {
    audio.pause();
    isPlaying = false;
    playPauseBtn.innerHTML = '<i class="fas fa-play"></i>';
    playPauseBtn.classList.replace("btn-danger", "btn-success");
  }
  
  function nextSong() {
    currentSongIndex = isShuffle
      ? Math.floor(Math.random() * songs.length)
      : (currentSongIndex + 1) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    loadSong(currentSongIndex);
    playSong();
  }
  
  function updateProgress() {
    const { duration, currentTime } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
  }
  
  function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
  }
  
  playPauseBtn.addEventListener("click", () => {
    isPlaying ? pauseSong() : playSong();
  });
  
  prevBtn.addEventListener("click", prevSong);
  nextBtn.addEventListener("click", nextSong);
  
  
  repeatBtn.addEventListener("click", () => {
    isRepeat = !isRepeat;
    repeatBtn.innerHTML = isRepeat
      ? '<i class="fas fa-redo-alt"></i>'
      : '<i class="fas fa-redo"></i>';
    if (isRepeat) {
      audio.currentTime = 0; 
    }
  });
  
  shuffleBtn.addEventListener("click", () => {
    isShuffle = !isShuffle;
    shuffleBtn.innerHTML = isShuffle
      ? '<i class="fas fa-random"></i>'
      : '<i class="fas fa-random"></i>';
    if (isShuffle) {
      currentSongIndex = Math.floor(Math.random() * songs.length);
      loadSong(currentSongIndex);
      playSong();
    }
  });
  
  function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsRemaining = seconds % 60;
    return `${minutes}:${secondsRemaining.toString().padStart(2, "0")}`;
  }
  
  audio.addEventListener("ended", () => {
    if (isRepeat) {
      playSong();
    } else {
      nextSong();
    }
  });
  
  audio.addEventListener("timeupdate", updateProgress);
  
  progressContainer.addEventListener("click", setProgress);
  
  songs.forEach((song, index) => {
    const li = document.createElement("li");
    li.textContent = `${song.title} (${formatTime(song.duration)})`;
    li.classList.add("list-group-item");
    li.addEventListener("click", () => {
      currentSongIndex = index;
      loadSong(index);
      playSong();
    });
    playlist.appendChild(li);
  });
  
  loadSong(currentSongIndex);