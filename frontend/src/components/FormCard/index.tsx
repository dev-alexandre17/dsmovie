import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Pixel } from 'types/pixel';
import { BASE_URL } from 'utils/requests';
import './styles.css';

type Props = {
    pixelId : string;
}

function FormCard( { pixelId } : Props) {

    const [pixel, setPixel] = useState<Pixel>();

    useEffect(() => {
        axios.get(`${BASE_URL}/pixelarts/${pixelId}`)
            .then(response => {
                setPixel(response.data);
            });
    }, [pixelId]);

    return (
        <div className="dspixel-form-container">
            <img className="dspixel-movie-card-image" src={pixel?.image} alt={pixel?.title} />
            <div className="dspixel-card-bottom-container">
                <h3>{pixel?.title}</h3>
                <form className="dspixel-form">
                    <div className="form-group dspixel-form-group">
                        <label htmlFor="email">Informe seu email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dspixel-form-group">
                        <label htmlFor="score">Informe sua avaliação</label>
                        <select className="form-control" id="score">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dspixel-form-btn-container">
                        <button type="submit" className="btn btn-primary dspixel-btn">Salvar</button>
                    </div>
                </form >
                <Link to="/">
                    <button className="btn btn-primary dspixel-btn mt-3">Cancelar</button>
                </Link>
            </div >
        </div >
    )
}

export default FormCard;