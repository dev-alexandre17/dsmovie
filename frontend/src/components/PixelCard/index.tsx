import PixelScore from "components/PixelScore";
import { Link } from "react-router-dom";

function PixelCard() {

    const pixel = {
        id: 1,
        image: "https://i.pinimg.com/originals/dc/a0/eb/dca0ebe28c0678b483240443911f75f0.gif",
        title: "The Travel",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dspixel-movie-card-image" src={pixel.image} alt={pixel.title} />
            <div className="dspixel-card-bottom-container">
                <h3>{pixel.title}</h3>
                <PixelScore />
                <Link to={`/form/${pixel.id}`}>
                    <div className="btn btn-primary dspixel-btn">Avaliar</div>
                </Link>
            </div>
        </div>
    );
}

export default PixelCard;