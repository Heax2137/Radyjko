document.addEventListener('DOMContentLoaded', function () {
    // Tablica z linkami do piosenek
    const songs = [
        "https://raw.githubusercontent.com/Heax2137/Radyjko/main/piosenka1.mp3",
        "https://raw.githubusercontent.com/Heax2137/Radyjko/main/piosenka2.mp3",
        "https://raw.githubusercontent.com/Heax2137/Radyjko/main/piosenka3.mp3"
    ];

    // Pobierz element audio
    const audioPlayer = document.getElementById('player');

    // Funkcja zmieniająca piosenki po zakończeniu aktualnej
    function changeSong() {
        // Losuj nową piosenkę
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        audioPlayer.src = randomSong;
        audioPlayer.play(); // Uruchom nową piosenkę
    }

    // Zdarzenie, które uruchomi zmianę piosenki po zakończeniu obecnej
    audioPlayer.addEventListener('ended', changeSong);
});
