'use client';

import { PauseFill, PlayFill, SkipEndFill, SkipStartFill } from "react-bootstrap-icons";
import { useMusicPlayer } from "../hooks/useMusicPlayer";

const PlayerControls = () => {

    const music = useMusicPlayer();


    return (
        <div>
            <div>
                <p>{music.currentTrackName}</p>
            </div>
            <button onClick={() => music.playPreviousTrack}>
                <SkipStartFill />
            </button>

            <button onClick={() => music.tooglePlay}>
                {music.isPlaying ? <PauseFill /> : <PlayFill />}
            </button>
            <button onClick={() => music.playNextTrack}>
                <SkipEndFill />
            </button>
        </div>
    )

};

export default PlayerControls;