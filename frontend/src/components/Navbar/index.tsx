import {ReactComponent as GitHubIcon} from 'assets/img/github.svg';
import './styles.css';

function Navbar() {

    return (
        <header>
            <nav className='container'>
          <div className='dspixel-nav-content'>
            <h1> DSPixel</h1>
              <a href="https://github.com/dev-alexandre17">
                <div className='dspixel-contact-container'>
                  <GitHubIcon />
                  <p className='dspixel-contact-link'>/dev-alexandre17</p>
                </div>
              </a>
          </div>
        </nav>
      </header>
    );
}

export default Navbar;