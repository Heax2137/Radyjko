document.addEventListener('DOMContentLoaded', function () {
    // Tablica z linkami do piosenek
    const songs = [
        "https://www.dropbox.com/s/53zyadmncwicuvjj6xegh/piosenka1.mp3?raw=1",
        "https://www.dropbox.com/s/w5rwwvop1nucodd7tr9tw/piosenka2.mp3?raw=1",
        "https://www.dropbox.com/s/wem6fev8hkupvswtam328/piosenka3.mp3?raw=1"
    ];

    // Pobierz element audio
    const audioPlayer = document.getElementById('player');
    const audioSource = document.getElementById('audioSource');

    // Funkcja zmieniająca piosenki po zakończeniu aktualnej
    function changeSong() {
        // Losuj nową piosenkę
        const randomSong = songs[Math.floor(Math.random() * songs.length)];
        audioSource.src = randomSong;  // Zmień źródło na nową piosenkę
        audioPlayer.load(); // Załaduj nową piosenkę
        audioPlayer.play(); // Uruchom nową piosenkę
    }

    // Zdarzenie, które uruchomi zmianę piosenki po zakończeniu obecnej
    audioPlayer.addEventListener('ended', changeSong);
});
