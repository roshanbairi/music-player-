window.addEventListener('DOMContentLoaded', () => {
  const playlistBox = document.querySelector('.playlist-box');
  const audioPlayer = document.getElementById('audioPlayer');
  const nowPlaying = document.getElementById('nowPlaying');

  fetch('/api/songs')
    .then(res => res.json())
    .then(songlist => {
      songlist.forEach((song) => {
        const p = document.createElement('p');
        p.textContent = song.name;
        p.classList.add('song-item');

        p.addEventListener('click', () => {
          audioPlayer.src = song.file;
          nowPlaying.textContent = 'Now Playing: ' + song.name;
          audioPlayer.play();
          document.querySelectorAll('.song-item').forEach(s => s.style.backgroundColor = '#282828');
          p.style.backgroundColor = '#1db954';
        });

        playlistBox.appendChild(p);
      });
    });
});
