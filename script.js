const songs = [
 // Neposredne Supabase povezave – že skrajšane

  { title: "Track 1", url: "https://shorturl.at/Kf3HI" },
  { title: "Track 2", url: "https://shorturl.at/icE7c" },
  { title: "Track 3", url: "https://shorturl.at/BBsOT" },
  { title: "Track 4", url: "https://shorturl.at/rzqVq" },


];

let currentIndex = 0;
let randomMode = false;

const audio = document.getElementById("audio");
// Odstranjena referenca na titleEl, saj ne želimo dinamično spreminjati besedila
// const titleEl = document.getElementById("song-title");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");

const playedTimestamps = {}; // index -> last played epoch seconds

function loadSong(index) {
  currentIndex = index;
  const song = songs[index];
  audio.src = song.url;
  // Odstranjena vrstica za posodabljanje besedila:
  // titleEl.textContent = song.title;
  playBtn.textContent = "⏸️"; // Pokaži pavza ikono, ker naj bi se pesem predvajala
}

function playPause() {
  if (audio.paused) {
    audio.play();
    playBtn.textContent = "⏸️";
  } else {
    audio.pause();
    playBtn.textContent = "▶️";
  }
}

function nextSong() {
  let nextIndex;
  if (randomMode) {
    nextIndex = getNextRandomIndex();
  } else {
    nextIndex = (currentIndex + 1) % songs.length;
  }
  playedTimestamps[currentIndex] = Date.now() / 1000;
  loadSong(nextIndex);
  audio.play();
}

function prevSong() {
  const prevIndex = currentIndex === 0 ? songs.length - 1 : currentIndex - 1;
  loadSong(prevIndex);
  audio.play();
}

function toggleShuffle() {
  randomMode = !randomMode;
  shuffleBtn.style.backgroundColor = randomMode ? "#00ff00" : "#ffffff33";
}

function getNextRandomIndex() {
  const now = Date.now() / 1000;
  const candidates = songs.map((_, i) => i).filter(i => {
    const last = playedTimestamps[i] || 0;
    return (now - last) > 3600; // 3600 seconds = 1 hour
  });

  const pool = candidates.length ? candidates : songs.map((_, i) => i);

  let idx;
  do {
    idx = pool[Math.floor(Math.random() * pool.length)];
  } while (idx === currentIndex && pool.length > 1);

  return idx;
}

audio.addEventListener("ended", nextSong);

prevBtn.addEventListener("click", prevSong);
playBtn.addEventListener("click", playPause);
nextBtn.addEventListener("click", nextSong);
shuffleBtn.addEventListener("click", toggleShuffle);

// Init
loadSong(0);
toggleShuffle(); // Nastavi začetno barvo za gumb za naključno predvajanje
