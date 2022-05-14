import { Link } from 'react-router-dom';
import './styles.css';

function Form() {

    const pixel = {
        id: 1,
        image: "https://i.pinimg.com/originals/dc/a0/eb/dca0ebe28c0678b483240443911f75f0.gif",
        title: "The Travel",
        count: 2,
        score: 4.5
    };

    return (
        <div className="dspixel-form-container">
            <img className="dspixel-movie-card-image" src={pixel.image} alt={pixel.title} />
            <div className="dspixel-card-bottom-container">
                <h3>{pixel.title}</h3>
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

export default Form;