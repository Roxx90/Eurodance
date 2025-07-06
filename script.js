const songs = [
  const songs = [
  { 2 Brothers On The 4th Floor - Dreams: "Track 1", url: "https://docs.google.com/uc?export=download&id=11wwaZANJuNHSR6NXxXtbqOgKCPka0RXo" },
  { 2 Brothers on the 4th Floor - Let Me Be Free: "Track 2", url: "https://docs.google.com/uc?export=download&id=144k4w-hG0VpWaX7MmZraoOeiGVUBGp81" },
  { 2 Unlimited - Get Ready For This: "Track 3", url: "https://docs.google.com/uc?export=download&id=1ARMgrAcMZxyJBTHPNT_L-Fnyk0O5RT__" },
  { title: "Track 4", url: "https://docs.google.com/uc?export=download&id=1B9jTFBSEXYVOrKn-wt_2q9YtL14dQop2" },
  { title: "Track 5", url: "https://docs.google.com/uc?export=download&id=1JjHEC0Hm9i44MhsfHrGx4Nh_GRFDqfwc" },
  { title: "Track 6", url: "https://docs.google.com/uc?export=download&id=1QICbsrOkxheuc2eWYNIpng9TXE6IJtSN" },
  { title: "Track 7", url: "https://docs.google.com/uc?export=download&id=1i3BNexCZJoF817Z0wduX5XcctT5p-Dlo" },
  { title: "Track 8", url: "https://docs.google.com/uc?export=download&id=1k-VBr2bzzhXjlPHnLopR8DDp9JUaf_Xz" },
  { title: "Track 9", url: "https://docs.google.com/uc?export=download&id=1s_f3CIL-dPs5_8LfYxbvdDJNQJ33oKon" },
  { title: "Track 10", url: "https://docs.google.com/uc?export=download&id=1xvuM34SwpwWY3K3k6D8do_8IYNbGgrMd" }
];


let currentIndex = 0;
let randomMode = false;

const audio = document.getElementById("audio");
const titleEl = document.getElementById("song-title");

const prevBtn = document.getElementById("prev");
const playBtn = document.getElementById("play");
const nextBtn = document.getElementById("next");
const shuffleBtn = document.getElementById("shuffle");

const playedTimestamps = {}; // index -> last played epoch seconds

function loadSong(index) {
  currentIndex = index;
  const song = songs[index];
  audio.src = song.url;
  titleEl.textContent = song.title;
  playBtn.textContent = "⏸️";
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
  shuffleBtn.style.background = randomMode ? "#00ff00" : "#ff00ff";
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
