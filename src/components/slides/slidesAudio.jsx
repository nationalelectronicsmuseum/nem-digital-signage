import { Swiper } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import AudioSlide from "../Slide/AudioSlide.jsx";
import { getLocalizedArtifact } from "../../assets/Localization.js";
import { EVOLUTION_OF_RECORDED_SOUND } from "../../assets/ArtifactTags.js";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import audio1 from "../../assets/sound/01C.mp3"
import audio2 from "../../assets/sound/02C.mp3"
import audio3 from "../../assets/sound/03C.mp3"

import audioImg1 from "../../assets/img/audioPic1.jpg"
import audioImg2 from "../../assets/img/audioPic2.jfif"
import audioImg3 from "../../assets/img/audioPic3.jpg"

import "./slides.css";

const SlidesAudio = () => {
    const evolutionOfRecordedSound = getLocalizedArtifact(EVOLUTION_OF_RECORDED_SOUND);
    
    return(
        <div>
            <Swiper
                pagination ={{
                    type: "progressbar"
                }}
                navigation = {true}
                modules = {[Pagination, Navigation]}
                className = "mySwiper"
                >
                    <AudioSlide info={evolutionOfRecordedSound.info[0]} image={audioImg1} audio={audio1} />
                    <AudioSlide info={evolutionOfRecordedSound.info[1]} image={audioImg2} audio={audio2} />
                    <AudioSlide info={evolutionOfRecordedSound.info[2]} image={audioImg3} audio={audio3} />
            </Swiper>
        </div>
    )
}

export default SlidesAudio