import { useEffect, useState } from 'react';
import { useAudioContext } from '../AudioProvider/AudioProvider.jsx';

import iconPlay from "../../assets/img/evoPlay.svg"
import iconPause from "../../assets/img/evoPause.svg"
import iconStop from "../../assets/img/evoStop.svg"

export default function SoundPlayer({ src }) {
    const { play, pause, stop, preload, currentSrc, isPlaying } = useAudioContext();
    const [localPlaying, setLocalPlaying] = useState(false);

    useEffect(() => {
        preload(src);
    }, [src, preload]);

    useEffect(() => {
        setLocalPlaying(isPlaying && currentSrc === src);
    }, [isPlaying, currentSrc, src]);

    const handlePlayPause = () => {
        if (localPlaying) pause();
        else play(src);
    };

    const handleStop = () => {
        stop();
    };

    return (
        <div className="audioPlayer">
            <img src={localPlaying ? iconPause : iconPlay} onClick={handlePlayPause} />
            <img src={iconStop} onClick={handleStop} />
        </div>
    );
}
