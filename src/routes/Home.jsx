import { useState } from "react"
import PlayerControls from "../components/PlayerControls"
import TrackList from "../components/TrackList"
import sinister from "../assets/sinister.mp3"
import stomp from "../assets/stomp.mp3"
import underWater from "../assets/underwater.mp3"
import { MusicContext } from "../contexts/MusicContext"


const Home = () => {
    const [state, setState] = useState({
        audiPlayer: new Audio(),
        tracks: [
            {
                name: "Sinister Music",
                file: sinister
            },
            {
                name: "Stomping Music",
                file: stomp
            },
            {
                name: "Underwater Music",
                file: underWater
            }
        ],
        currentTrackIndex: 0,
        isPlaying: false,

    })
    console.log(state, "state")

    return (
        <div>
            <MusicContext.Provider value={[state, setState]}>
                <PlayerControls />
                <TrackList />
            </MusicContext.Provider>
        </div>
    )
}

export default Home