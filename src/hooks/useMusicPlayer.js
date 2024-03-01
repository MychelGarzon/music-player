import { useContext } from "react"
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {

    const [state, setState] = useContext(MusicContext);

    const tooglePlay = () => {
        if (state.isPlaying) {
            state.audioPlayer.pause();
            setState({ ...state, isPlaying: false });
        } else {
            state.audioPlayer.play();
            setState({ ...state, isPlaying: true });
        }
    }

    const playTrack = (index) => {
        if (index === state.currentTrackIndex) {
            tooglePlay();
        } else {
            state.audioPlayer.pause();
            state.audioPlayer = new Audio(state.tracks[index].file);
            state.audioPlayer.play();
            setState({ ...state, currentTrackIndex: index, isPlaying: true });
        }

    }
    const playPreviousTrack = () => {
        let newIndex = null;
        state.currentTrackIndex === 0
            ? (newIndex = state.tracks.length - 1)
            : (newIndex = state.currentTrackIndex - 1)
        playTrack(newIndex);
    }

};
export { useMusicPlayer };