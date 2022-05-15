import PixelStarts from "components/PixelStarts";
import './styles.css';

type Props = {
    score: number;
    count: number;
}

function PixelScore( {score, count} : Props) {

    return (
        <div className="dspixel-score-container">
            <p className="dspixel-score-value">{score > 0 ? score.toFixed(1) : '-'}</p>
            <PixelStarts score={score}/>
            <p className="dspixel-score-count">{count} avaliações</p>
        </div>
    );
}

export default PixelScore;