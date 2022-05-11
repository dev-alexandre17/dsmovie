import PixelScore from "components/PixelScore";

function PixelCard() {

    const pixel = {
        id: 1,
        image: "https://www.themoviedb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The Witcher",
        count: 2,
        score: 4.5
    };

    return (
        <div>
            <img className="dspixel-movie-card-image" src={pixel.image} alt={pixel.title} />
            <div className="dspixel-card-bottom-container">
                <h3>{pixel.title}</h3>
                <PixelScore />
                <div className="btn btn-primary dspixel-btn">Avaliar</div>
            </div>
        </div>
    );
}

export default PixelCard;