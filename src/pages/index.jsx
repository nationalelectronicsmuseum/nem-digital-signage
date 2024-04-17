import { Link } from "react-router-dom";
import marconiHome from "../assets/img/home-marconi.svg"
import audioHome from "../assets/img/home-audio.svg"
import telegraphHome from "../assets/img/home-telegraph.svg"
 
const HomeStation6 = () => {
    return (
        <div className="home">
            <div className="border">
                <h1 className="title">National Electronics Museum</h1>
            </div>

            <Link to="/audio" relative="path"><img src={audioHome} className="homeImg"></img></Link>
            <Link to="/marconi" relative="path"><img src={marconiHome} className="homeImg"></img></Link>
            <Link to="/telegraph" relative="path"><img src={telegraphHome} className="homeImg"></img></Link>
            
            <button>ADA</button>
        </div>
    );
};
 
export default HomeStation6;