document.addEventListener('DOMContentLoaded', function () {
    // Tablica z linkami do piosenek
    const songs = [
        "",
        "https://www.dropbox.com/scl/fi/w5rwwvop1nucodd7tr9tw/piosenka2.mp3?rlkey=wabypyg1dc3nvuogtuvz2z948&st=5pmahm9s&raw=1",
        "https://www.dropbox.com/scl/fi/wem6fev8hkupvswtam328/piosenka3.mp3?rlkey=wr0z0rj8opt93bkizfzhwotoc&st=y86q29gm&raw=1"
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
