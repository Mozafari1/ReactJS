import { combineReducers } from 'redux';

const songsReducer = () => {
    return [{
            title: 'Sexy ladies',
            duration: '3:23'
        },
        {
            title: 'I wish you was here',
            duration: '4:02'
        },
        {
            title: 'Be mine',
            duration: '3:43'
        },
        {
            title: 'Brown',
            duration: '3:45'
        }
    ];
};
const selectedSongReducer = (selectSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }
    return selectSong;
};

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer
});