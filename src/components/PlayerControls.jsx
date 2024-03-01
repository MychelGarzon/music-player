'use client';

import { PlayFill, SkipEndFill, SkipStartFill } from "react-bootstrap-icons";

const PlayerControls = () => {
    //TODO: ADD useMuscPlayer hook

    return (
        <div>
            <div>
                <p>Here I will be current track name</p>
            </div>
            <button>
                <SkipStartFill />
            </button>

            <button>
                <PlayFill />
            </button>
            <button>
                <SkipEndFill />
            </button>
        </div>
    )

};

export default PlayerControls;