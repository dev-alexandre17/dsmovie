import PixelStarts from "components/PixelStarts";
import './styles.css';

function PixelScore() {

    const score = 3.5;
    const count = 13;

    return (
        <div className="dspixel-score-container">
            <p className="dspixel-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <PixelStarts />
            <p className="dspixel-score-count">{count} avaliações</p>
        </div>
    );
}

export default PixelScore;