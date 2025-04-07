import {type Song, songState} from "./songsState.svelte";

export interface Playlist{
    id: number;
    name: string;
    cover: string;
    songs: Song[];
    username: string;
}



export const favourites = $state<Playlist>({
    id: 0,
    name: "Favourites",
    cover: "covers/favourites.jpg",
    songs: songState.songs.slice(0,4),
    username: "username"
})

export function like(songId: number) {
    if (favourites.songs.some(x => x.id === songId)) {
        favourites.songs = favourites.songs.filter(x => x.id !== songId);
    } else {
        const song = songState.songs.find(x => x.id === songId);
        if (song) {
            favourites.songs = [...favourites.songs, song];
        }
    }
}

export function AddToPlaylist(songId: number, playlistId: number) {
    const song = songState.songs.find(x => x.id === songId);
    const playlistToUpdate = allPlaylists.find(x => x.id === playlistId);
    if (song && playlistToUpdate && !playlistToUpdate.songs.some(x => x.id === songId)) {
        playlistToUpdate.songs = [...playlistToUpdate.songs, song];
    }
}

export function RemoveFromPlaylist(songId: number, playlistId: number) {
    const playlistToUpdate = allPlaylists.find(x => x.id === playlistId);
    if (playlistToUpdate) {
        playlistToUpdate.songs = playlistToUpdate.songs.filter(x => x.id !== songId);
    }
}

export function getPlaylistsWithSong(songId: number, includeFavorites : boolean = false) {
    return allPlaylists.filter(playlist => playlist.songs.some(song => song.id === songId)
    && (includeFavorites || playlist.id !== 0));
}

export function getPlaylistsWithOutSong(songId: number, includeFavorites : boolean = false) {
    return allPlaylists.filter(playlist =>
        !playlist.songs.some(song => song.id === songId)
        && (includeFavorites || playlist.id !== 0));
}

export function addToPlaylist(playlistId: number, songId: number) {
    const playlist = allPlaylists.find(x => x.id === playlistId);
    const song = songState.songs.find(x => x.id === songId);
    song && playlist?.songs.push(song);
}
export function removeFromPlaylist(playlistId: number, songId: number) {
    const playlist = allPlaylists.find(x => x.id === playlistId);
    const song = songState.songs.find(x => x.id === songId);
    if (playlist && song) {
        playlist.songs = playlist.songs.filter(x => x.id !== songId);
    }
}

export function isLiked(songId: number) {
    return favourites.songs.some(x => x.id === songId);
}

export const allPlaylists = $state<Playlist[]>([
    favourites,
    {
        id: 1,
        name: "Chill songs",
        cover: "covers/Vinyl.jpg",
        songs: songState.songs.slice(4, 8),
        username: "username"
    },
    {
        id: 2,
        name: "Gaming playlist",
        cover: "covers/kitten.jpg",
        songs: [],
        username: "username"
    },
])