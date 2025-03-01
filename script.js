const songs = [
    "https://github.com/Heax2137/Radyjko/raw/refs/heads/main/Radio%20Chlew%20-%20Alie%20Olie%20(7).mp3",
    "https://github.com/Heax2137/Radyjko/blob/0f90105b13e8800aeafd5f40f16377121706027d/Radio%20Chlew%20-%20Alie%20Olie.mp3",
    "https://github.com/Heax2137/Radyjko/blob/0f90105b13e8800aeafd5f40f16377121706027d/Radio%20Chlew%20-%20Alie%20Olie.mp3"
];

const player = document.getElementById("player");

function nextSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    player.src = songs[randomIndex];
    player.play();
}

// Automatyczna zmiana po zakończeniu utworu
player.addEventListener("ended", nextSong);

// Wczytaj pierwszą piosenkę
nextSong();
