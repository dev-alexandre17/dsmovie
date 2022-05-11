import {ReactComponent as Arrow} from 'assets/img/arrow.svg';
import './styles.css';

function Pagination() {

    return (
        <div className="dspixel-pagination-container">
            <div className="dspixel-pagination-box">
                <button className="dspixel-pagination-button" disabled={true} >
                    <Arrow />
                </button>
                <p>{`${1} de ${3}`}</p>
                <button className="dspixel-pagination-button" disabled={false} >
                    <Arrow className="dspixel-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}

export default Pagination;