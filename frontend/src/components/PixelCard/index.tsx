import PixelScore from "components/PixelScore";
import { Link } from "react-router-dom";
import { Pixel } from "types/pixel";

type Props = {
    pixel: Pixel;
}

function PixelCard( { pixel } : Props) {

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