import { ReactComponent as Arrow } from 'assets/img/arrow.svg';
import { PixelPage } from 'types/pixel';
import './styles.css';

type Props = {
    page: PixelPage;
    onChange: Function;
}

function Pagination({ page, onChange }: Props) {

    return (
        <div className="dspixel-pagination-container">
            <div className="dspixel-pagination-box">
                <button className="dspixel-pagination-button" disabled={page.first}
                    onClick={() => onChange(page.number - 1)}>
                    <Arrow />
                </button>
                <p>{`${page.number + 1} de ${page.totalPages}`}</p>
                <button className="dspixel-pagination-button" disabled={page.last} 
                    onClick={() => onChange(page.number + 1)}>
                    <Arrow className="dspixel-flip-horizontal" />
                </button>
            </div>
        </div>
    );

}

export default Pagination;