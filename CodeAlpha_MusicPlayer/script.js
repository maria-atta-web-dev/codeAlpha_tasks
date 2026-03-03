// ==================== POPULAR PLAYLIST ====================
const playlist = [
    {
        title: "Blinding Lights",
        artist: "The Weeknd",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3",
        cover: "https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=600&h=600&fit=crop",
        duration: 0
    },
    {
        title: "Levitating",
        artist: "Dua Lipa",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3",
        cover: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=600&fit=crop",
        duration: 0
    },
    {
        title: "Stay",
        artist: "Kid LAROI, Justin Bieber",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3",
        cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&h=600&fit=crop",
        duration: 0
    },
    {
        title: "As It Was",
        artist: "Harry Styles",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3",
        cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&h=600&fit=crop",
        duration: 0
    },
    {
        title: "Bad Habit",
        artist: "Steve Lacy",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3",
        cover: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?w=600&h=600&fit=crop",
        duration: 0
    },
    {
        title: "Flowers",
        artist: "Miley Cyrus",
        src: "https://www.soundhelix.com/examples/mp3/SoundHelix-Song-6.mp3",
        cover: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=600&h=600&fit=crop",
        duration: 0
    }
];

// ==================== DOM ELEMENTS ====================
const audio = new Audio();
const playerContainer = document.querySelector('.music-player');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const overlayPlayIcon = document.getElementById('overlayPlayIcon');
const songTitle = document.getElementById('songTitle');
const songArtist = document.getElementById('songArtist');
const albumImage = document.getElementById('albumImage');
const currentTimeSpan = document.getElementById('currentTime');
const durationSpan = document.getElementById('duration');
const progress = document.getElementById('progress');
const progressArea = document.getElementById('progressArea');
const progressBar = document.getElementById('progressBar');
const volumeSlider = document.getElementById('volumeSlider');
const volumeIcon = document.getElementById('volumeIcon');
const volumePercent = document.getElementById('volumePercent');
const playlistItems = document.getElementById('playlistItems');
const playlistCount = document.getElementById('playlistCount');

// ==================== STATE ====================
let currentSongIndex = 0;
let isPlaying = false;
let isDraggingProgress = false;

// ==================== INITIAL RENDER ====================
function renderPlaylist() {
    playlistItems.innerHTML = '';
    playlist.forEach((song, index) => {
        const li = document.createElement('li');
        li.dataset.index = index;
        li.classList.toggle('active', index === currentSongIndex);
        
        li.innerHTML = `
            <img src="${song.cover}" alt="${song.title}">
            <div class="playlist-info">
                <div class="song-title">${song.title}</div>
                <div class="song-artist">${song.artist}</div>
            </div>
            <span class="duration">${song.duration ? formatTime(song.duration) : '0:00'}</span>
        `;
        
        li.addEventListener('click', () => {
            currentSongIndex = index;
            loadSong(currentSongIndex);
            playSong();
            updateActivePlaylist();
        });
        
        playlistItems.appendChild(li);
    });
    playlistCount.textContent = `${playlist.length} songs`;
}

function updateActivePlaylist() {
    document.querySelectorAll('#playlistItems li').forEach((li, index) => {
        li.classList.toggle('active', index === currentSongIndex);
    });
}

// ==================== LOAD SONG ====================
function loadSong(index) {
    const song = playlist[index];
    audio.src = song.src;
    songTitle.textContent = song.title;
    songArtist.textContent = song.artist;
    albumImage.src = song.cover;
    
    // Reset progress and time
    currentTimeSpan.textContent = '0:00';
    durationSpan.textContent = '0:00';
    progress.style.width = '0%';
    
    // Update playlist active state
    updateActivePlaylist();
    
    // Preload metadata to get duration
    audio.load();
}

// ==================== PLAY/PAUSE ====================
function playSong() {
    audio.play().then(() => {
        isPlaying = true;
        playerContainer.classList.add('playing');
        playBtn.innerHTML = '<i class="fas fa-pause"></i>';
    }).catch(error => {
        console.log("Playback failed:", error);
        isPlaying = false;
        playerContainer.classList.remove('playing');
        playBtn.innerHTML = '<i class="fas fa-play"></i>';
    });
}

function pauseSong() {
    audio.pause();
    isPlaying = false;
    playerContainer.classList.remove('playing');
    playBtn.innerHTML = '<i class="fas fa-play"></i>';
}

function togglePlay() {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
}

// ==================== NEXT/PREVIOUS ====================
function nextSong() {
    currentSongIndex = (currentSongIndex + 1) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong(); else loadSong(currentSongIndex);
}

function prevSong() {
    currentSongIndex = (currentSongIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentSongIndex);
    if (isPlaying) playSong(); else loadSong(currentSongIndex);
}

// ==================== TIME FORMATTER ====================
function formatTime(seconds) {
    if (isNaN(seconds) || seconds === 0) return '0:00';
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

// ==================== EVENT LISTENERS ====================
// Play/Pause button
playBtn.addEventListener('click', togglePlay);

// Overlay play icon
overlayPlayIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    togglePlay();
});

// Album art click to toggle
document.getElementById('albumArt').addEventListener('click', togglePlay);

// Next/Prev buttons
nextBtn.addEventListener('click', nextSong);
prevBtn.addEventListener('click', prevSong);

// Update progress and duration as audio plays
audio.addEventListener('timeupdate', () => {
    if (!isDraggingProgress) {
        const currentTime = audio.currentTime;
        const duration = audio.duration || 0;
        currentTimeSpan.textContent = formatTime(currentTime);
        const progressPercent = (currentTime / duration) * 100 || 0;
        progress.style.width = `${progressPercent}%`;
        
        // Update glow position
        progressBar.style.setProperty('--progress-position', `${progressPercent}%`);
    }
});

// When metadata (duration) is loaded
audio.addEventListener('loadedmetadata', () => {
    const duration = audio.duration;
    playlist[currentSongIndex].duration = duration;
    durationSpan.textContent = formatTime(duration);
    
    // Update playlist item duration
    const activeLi = document.querySelector(`#playlistItems li[data-index="${currentSongIndex}"] .duration`);
    if (activeLi) activeLi.textContent = formatTime(duration);
});

// When song ends, play next
audio.addEventListener('ended', nextSong);

// Progress bar seeking
progressArea.addEventListener('mousedown', (e) => {
    isDraggingProgress = true;
});

progressArea.addEventListener('click', (e) => {
    const rect = progressArea.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const duration = audio.duration || 0;
    audio.currentTime = (clickX / width) * duration;
});

document.addEventListener('mouseup', (e) => {
    if (isDraggingProgress) {
        isDraggingProgress = false;
        const rect = progressArea.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        if (clickX >= 0 && clickX <= rect.width) {
            const width = rect.width;
            const duration = audio.duration || 0;
            audio.currentTime = (clickX / width) * duration;
        }
    }
});

// Volume control
volumeSlider.addEventListener('input', (e) => {
    const volume = parseFloat(e.target.value);
    audio.volume = volume;
    volumePercent.textContent = `${Math.round(volume * 100)}%`;
    
    if (volume == 0) {
        volumeIcon.className = 'fas fa-volume-off';
    } else if (volume < 0.5) {
        volumeIcon.className = 'fas fa-volume-low';
    } else {
        volumeIcon.className = 'fas fa-volume-high';
    }
});

volumeIcon.addEventListener('click', () => {
    if (audio.volume > 0) {
        audio.volume = 0;
        volumeSlider.value = 0;
        volumePercent.textContent = '0%';
        volumeIcon.className = 'fas fa-volume-off';
    } else {
        audio.volume = 0.7;
        volumeSlider.value = 0.7;
        volumePercent.textContent = '70%';
        volumeIcon.className = 'fas fa-volume-high';
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        e.preventDefault();
        togglePlay();
    } else if (e.code === 'ArrowRight') {
        e.preventDefault();
        nextSong();
    } else if (e.code === 'ArrowLeft') {
        e.preventDefault();
        prevSong();
    }
});

// ==================== INITIAL LOAD ====================
function init() {
    renderPlaylist();
    loadSong(0);
    audio.volume = 0.7;
    
    // Add cool loading effect
    playerContainer.style.opacity = '0';
    playerContainer.style.transform = 'translateY(20px)';
    setTimeout(() => {
        playerContainer.style.transition = 'all 0.5s ease';
        playerContainer.style.opacity = '1';
        playerContainer.style.transform = 'translateY(0)';
    }, 100);
}

// Start the app
init();