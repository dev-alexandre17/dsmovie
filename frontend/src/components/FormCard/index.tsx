import axios, { AxiosRequestConfig} from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Pixel } from 'types/pixel';
import { BASE_URL } from 'utils/requests';
import { validateEmail } from 'utils/validate';
import './styles.css';

type Props = {
    pixelartId : string;
}

function FormCard( { pixelartId } : Props) {

    const navigate = useNavigate();

    const [pixel, setPixel] = useState<Pixel>();

    useEffect(() => {
        axios.get(`${BASE_URL}/pixelarts/${pixelartId}`)
            .then(response => {
                setPixel(response.data);
            });
    }, [pixelartId]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if (!validateEmail(email)) {
            return;
        }

        const config: AxiosRequestConfig = {
            baseURL: BASE_URL,
            method: 'PUT',
            url: '/scores',
            data: {
                email: email,
                pixelartId: pixelartId,
                score: score
            }
        }

        axios(config).then(response  => {
            navigate("/");
        });

    }

    return (
        <div className="dspixel-form-container">
            <img className="dspixel-movie-card-image" src={pixel?.image} alt={pixel?.title} />
            <div className="dspixel-card-bottom-container">
                <h3>{pixel?.title}</h3>
                <form className="dspixel-form" onSubmit={handleSubmit}>
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