import { useContext } from "react"
import { MusicContext } from "../contexts/MusicContext";

const useMusicPlayer = () => {
    const [state, setState] = useContext(MusicContext);


}

export { useMusicPlayer }