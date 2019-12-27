export const selectSong = (song) => {
    // Action creator
    // return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};