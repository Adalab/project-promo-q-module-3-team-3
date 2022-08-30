import Logo from '../images/commit_cards_logo.png';
import { Link } from 'react-router-dom';
import '../styles/layout/Landing.scss';


function Landing() {
    return (<main class="main__landing">
        <figure class="landing__logo">
            <img
                class="landing__logo--img"
                src={Logo}
                alt="logo"
                title="logo"
            />
        </figure>
        <article class="landing__article">
            <h1 class="landing__article--title">Crea tu tarjeta de visita</h1>
            <p class="landing__article--parragraph">
                Crea mejores contactos profesionales mientras disfrutas de nuestras increíbles atracciones
            </p>
        </article>
        <section class="landing__section">
            <div class="landing__wrapper">
                <i class="fa-solid fa-vector-square landing__icon"></i>
                <h2 class="landing__section--description">Diseña</h2>
            </div>
            <div class="landing__wrapper">
                <i class="fa-solid fa-keyboard landing__icon"></i>
                <h2 class="landing__section--description">Rellena</h2>
            </div>
            <div class="landing__wrapper">
                <i class="fa-solid fa-share-nodes landing__icon"></i>
                <h2 class="landing__section--description">Comparte</h2>
            </div>
        </section>
        <Link to='/card' class="landing__button">Comenzar</Link>
    </main>)
}

export default Landing;