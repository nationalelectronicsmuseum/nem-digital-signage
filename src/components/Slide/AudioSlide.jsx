import { SwiperSlide } from "swiper/react";
import SlideImage from "../slideImage/SlideImage.jsx";
import SoundPlayer from "../SoundPlayer/SoundPlayer.jsx";
import { getLocalizedStringConstant } from "../../assets/Localization.js";
import Speech from "../speech/speech.jsx";

const AudioSlide = (props) => {
    const info = props.info;
    const image = props.image;
    const audio = props.audio;
    const performedByText = getLocalizedStringConstant("Performed by");
    const title = info.title ? info.title : "No title";
    const performer = info.performedBy ? info.performedBy : "No Performer";
    const performedWhen = info.performedWhen ? info.performedWhen : "no date";
    const recordedOn = info.recordedOn ? info.recordedOn : "No record media";
    const speechText = `${title}. ${performedByText} ${performer}, ${performedWhen}. ${recordedOn}`;
    
    return (
        <SwiperSlide>
            <div className="audioSlides">
                <div className="audioLeft">
                    <SlideImage img={image} />
                </div>
                <div className="audioRight">
                    <div className="audioTitleAndSpeech">
                        <h3>{title}</h3>
                        <Speech text={speechText} />
                    </div>
                    <span><h5><i>{performedByText}</i> <b>{performer}</b>, {performedWhen}</h5></span>
                    <p>{recordedOn}</p>
                    <SoundPlayer src={audio} />
                </div>

            </div>
        </SwiperSlide>
    )
}
AudioSlide.displayName = 'SwiperSlider';
export default AudioSlide;