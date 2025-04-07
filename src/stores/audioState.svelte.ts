import { writable } from "svelte/store";


export interface AudioStateSvelte {
    audio: HTMLAudioElement | null;
    isPlaying: boolean;
    currentTime: number;
    duration: number;
    volume: number;
    src: string;
    name: string;
    artist: string;
    cover: string;
    album: string;
}

export const audioState = $state<AudioStateSvelte>({
    audio: null,
    isPlaying: false,
    currentTime: 0,
    duration: 0,
    volume: 1,
    src: "/audio/sample.mp3",
    name: "Sample",
    artist: "Artist",
    cover: "/images/cover.jpg",
    album: "Album",
});

export const setAudioRef = (audioElement: HTMLAudioElement) => {
    audioState.audio = audioElement;
};

// Function to toggle play/pause
export const togglePlay = () => {
    if (!audioState.audio)
        return;

    if (audioState.audio.paused) {
        audioState.audio.play();
        audioState.isPlaying = true;
    } else {
        audioState.audio.pause();
        audioState.isPlaying = false;
    }
}

// Function to stop playback
export const stopAudio = () => {
    if (audioState.audio) {
        audioState.audio.pause();
        audioState.audio.currentTime = 0;
    }
    audioState.isPlaying = false;
    audioState.currentTime = 0;
}

// Function to update current time and duration
export const updateTime = () => {
    audioState.currentTime = audioState.audio?.currentTime || 0;
    audioState.duration = audioState.audio?.duration || 0
}

// Function to seek to a specific time
export const seek = (time: number) => {
    if (audioState.audio) {
        audioState.audio.currentTime = time;
    }
}

// Function to set volume
export const setVolume = (volume: number) => {
    if (audioState.audio) {
        audioState.audio.volume = volume;
    }
}