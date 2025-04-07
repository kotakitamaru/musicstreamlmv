import {type AudioStateSvelte, audioState} from "./audioState.svelte";

export interface Song {
    id: number;
    title: string;
    artist: string;
    album: string;
    cover: string;
    src: string;
    single: boolean;
    duration : number;
}


export interface SongStore {
    songs: Song[];
    currentSongIndex: number;
}

export const initialSongs: Song[] = [
    {
        id: 1,
        title: "Безслідно",
        artist: "Mistmorn",
        album: "Нудьга",
        cover: "covers/Нудьга.jpg",
        src: "songs/Безслідно.mp3",
        single: false,
        duration: 80
    },
    {
        id: 2,
        title: "Божевілля вдвох",
        artist: "Mistmorn",
        album: "Single",
        cover: "covers/Божевілля вдвох.jpg",
        src: "songs/Божевілля двох.mp3",
        single: true,
        duration: 193
    },
    {
        id: 3,
        title: "Дідько, я у розпачі...",
        artist: "Mistmorn",
        album: "Single",
        cover: "covers/Дідько я у розпачі.jpg",
        src: "songs/дідько, я у розпачі....mp3",
        single: true,
        duration: 212
    },
    {
        id: 4,
        title: "Затишок",
        artist: "Mistmorn",
        album: "Нудьга",
        cover: "covers/Нудьга.jpg",
        src: "songs/Затишок.mp3",
        single: false,
        duration: 202
    },
    {
        id: 5,
        title: "Між мною та зоряним небом",
        artist: "Mistmorn",
        album: "Нудьга",
        cover: "covers/Нудьга.jpg",
        src: "songs/Між мною та зоряним небом.mp3",
        single: false,
        duration: 133
    },
    {
        id: 6,
        title: "Прохолода",
        artist: "Mistmorn",
        album: "Нудьга",
        cover: "covers/Нудьга.jpg",
        src: "songs/Прохолода [prod. faithful_dex].mp3",
        single: false,
        duration: 114
    },
    {
        id: 0,
        title: "Сподіваюсь, з тобою все гаразд",
        artist: "Mistmorn",
        album: "Single",
        cover: "covers/Сподіваюсь, з тобою все гаразд.jpg",
        src: "songs/Сподіваюсь, з тобою все гаразд.mp3",
        single: true,
        duration: 185
    },

];

export const songState = $state<SongStore>({
    songs: initialSongs,
    currentSongIndex: 1,
});


export const setCurrentSong = (index: number) => {
    songState.currentSongIndex = index;
    if (audioState.audio) {
        audioState.audio.load();
        if (audioState.isPlaying) {
            audioState.audio.play();
        }
    }
};

export const setQueue = (queue: Song[], index: number = 0, play: boolean = true) => {
    songState.songs = queue;
    songState.currentSongIndex = index;
    if (audioState.audio) {
        audioState.audio.load();
        if(play) {
            audioState.audio.play();
            audioState.isPlaying = true;
        }
    }
};

// Function to go to the next song
export const nextSong = () => {
    songState.currentSongIndex = (songState.currentSongIndex + 1) % songState.songs.length
    if (audioState.audio) {
        audioState.audio.load();
            audioState.audio.play();
            audioState.isPlaying = true;
    }
};

// Function to go to the previous song
export const prevSong = () => {
    songState.currentSongIndex = (songState.currentSongIndex - 1 + songState.songs.length) % songState.songs.length
    if (audioState.audio) {
        audioState.audio.load();
        audioState.audio.play();
        audioState.isPlaying = true;
    }
}

