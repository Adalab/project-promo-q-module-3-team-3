import "../styles/App.scss";
import logo from "../images/commit_land_logo.png";
import adalab from "../images/logo-adalab.png";
import {useState} from 'react';

function App() {

  const [dataCard, setDataCard] = useState({
    palette: 1,
    name: "",
    job: "",
    phone: "",
    email: "",
    linkedin: "",
    github: "",
    photo: "",
  });

  const handleInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    const inputName = ev.currentTarget.name;
    setDataCard({...dataCard, [inputName]: inputValue});
  };

  const handleReset = (ev) => {
    ev.preventDefault();
    setDataCard(
      {palette: 1,
      name: "",
      job: "",
      phone: "",
      email: "",
      linkedin: "",
      github: "",
      photo: "",}
    );
  };

  {/*Ese 1 del dataCard.palette es un número porque si no el fetch hace katakroker, es como lo quiere el server*/}

  return (
    <div>
      <header className="header">
        <figure className="header__figure">
          <img
            src= {logo}
            alt="logo-awesome-profile-cards"
            className="header__figure--logo"
          />
        </figure>
      </header>

      <main className="main">
        <section
          className="preview">
          <div className="wrapper">
            <button className="preview__button js-reset-button" onClick={handleReset}>
              <i className="fa-regular fa-trash-can"></i>Reset
            </button>

            <article className={`card js_cardPreview palette${dataCard.palette}`}>
              <div className="card__rectangle"></div>
              <div className="card__info">
                <h3 className="card__name js_cardname">{dataCard.name || `Nombre y Apellidos`}</h3>
                <p className="card__job js_cardjob">{dataCard.job || `Front-end developer`}</p>
              </div>
              <div className="card__photo">
                <div className="profile">
                  <div
                    className="profile__image js__profile-image"></div>
                </div>
                <nav className="card__footer">
                  <ul className="socialmedia">
                    <li>
                      <a
                        className="js_cardtel"
                        href={`tel:${dataCard.phone}`}
                        title="Teléfono"
                      >
                        <i className="socialmedia__icon fa-solid fa-mobile-screen-button"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardemail"
                        href={`mailto:${dataCard.email}`}
                        title="Correo"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-regular fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardlinkedin"
                        href={dataCard.linkedin}
                        title="LinkedIn"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardgithub"
                        href={dataCard.github}
                        title="GitHub"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-brands fa-github-alt"></i>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </article>
          </div>
        </section>

        {/*Empieza el form */}

        <form className="form js_all_inputs" action="">
          <fieldset className="fieldset__1">
            <legend className="js_title_design fieldset__1--legend">
              <i className="fa-solid fa-vector-square fieldset__1--iconSquare"></i>
              <h2 className="fieldset__1--title">Diseña</h2>
              <i className="js_arrow_design fa-solid fa-rocket fieldset__1--iconArrow arrow-down"></i>
            </legend>
            <section className="js_content_design range">
              <h3 className="range__title">Colores</h3>
              <div className="range__pantone">
                <div className="pantone1">
                  <input
                    className="js_radio pantone1__input"
                    type="radio"
                    value="1"
                    id="palette1"
                    name="palette"
                    onChange={handleInput}
                    checked={dataCard.palette === "1" || (dataCard.palette !== "2" && dataCard.palette !== "3")}
                  />
                  <div className="pantone1__first"></div>
                  <div className="pantone1__second"></div>
                  <div className="pantone1__third"></div>
                </div>
                <div className="pantone2">
                  <input
                    className="js_radio pantone1__input"
                    type="radio"
                    value="2"
                    id="palette2"
                    name="palette"
                    onChange={handleInput}
                    checked={dataCard.palette === "2"}
                  />
                  <div className="pantone2__first"></div>
                  <div className="pantone2__second"></div>
                  <div className="pantone2__third"></div>
                </div>
                <div className="pantone3">
                  <input
                    className="js_radio pantone1__input"
                    type="radio"
                    value="3"
                    id="palette3"
                    name="palette"
                    onChange={handleInput}
                    checked={dataCard.palette === "3"}
                  />
                  <div className="pantone3__first"></div>
                  <div className="pantone3__second"></div>
                  <div className="pantone3__third"></div>
                </div>
              </div>
            </section>
          </fieldset>

          <fieldset className="fieldset__2">
            <legend className="js_title_fill fieldset__2--legend">
              <i className="fa-solid fa-keyboard fieldset__2--iconKeyboard"></i>
              <h2 className="fieldset__2--title">Rellena</h2>
              <i className="js_arrow_fill fa-solid fa-rocket fieldset__2--iconArrow"></i>
            </legend>
            <div className="js_content_fill fieldset__2--div">
              <label className="label" htmlFor="firstAndSecondName">
                Nombre completo
              </label>
              <input
                placeholder="Ej: Sally Jill"
                type="text"
                name="name"
                id="name"
                className="fieldset__2--input js_name"
                value={dataCard.name}
                onChange={handleInput}
              />
              <label className="label" htmlFor="work">
                Puesto
              </label>
              <input
                placeholder="Ej: Front-end unicorns"
                type="text"
                name="job"
                id="job"
                className="fieldset__2--input js_job"
                value={dataCard.job}
                onChange={handleInput}
              />

              <div className="wrapperImageFieldset2">
                <div className="action">
                  <label className="action__upload-btn" htmlFor="img-selector">
                    Añadir imagen
                  </label>
                  <input
                    type="file"
                    name=""
                    id="img-selector"
                    className="action__hiddenField js__profile-upload-btn"
                  />
                </div>

                <div
                  className="profile__preview js__profile-preview"></div>
              </div>

              <label className="label" htmlFor="email">
                Email
              </label>
              <input
                placeholder="Ej: sallyhill@gmail.com"
                type="email"
                name="email"
                id="email"
                className="fieldset__2--input js_email"
                value={dataCard.email}
                onChange={handleInput}
              />
              <label className="label" htmlFor="tel">
                Teléfono
              </label>
              <input
                placeholder="Ej. 555-55-55-55"
                type="tel"
                name="phone"
                id="phone"
                className="fieldset__2--input js_tlf"
                value={dataCard.phone}
                onChange={handleInput}
              />
              <label className="label" htmlFor="linkedin">
                LinkedIn
              </label>
              <input
                placeholder="Ej: https://linkedin.com/sally.hill"
                type="url"
                name="linkedin"
                id="linkedin"
                className="fieldset__2--input js_linkedin"
                value={dataCard.linkedin}
                onChange={handleInput}
              />
              <label className="label" htmlFor="github">
                Github
              </label>
              <input
                placeholder="Ej: https://github.com/sally-hill"
                type="text"
                name="github"
                id="github"
                className="fieldset__2--input js_github"
                value={dataCard.github}
                onChange={handleInput}
              />
            </div>
          </fieldset>

          <fieldset className="fieldset-3">
            <legend className="js_title_share fieldset-3__legend">
              <i className="fa-solid fa-share-nodes"></i>
              <h2 className="fieldset-3__legend--title">comparte</h2>
              <i className="js_arrow_share fa-solid fa-rocket fieldset__2--iconArrow"></i>
            </legend>

            <button className="js_content_share fieldset-3__button">
              <i className="fa-solid fa-address-card"></i>crear tarjeta
            </button>
          </fieldset>

          {/* EMPIEZA AQUÍ EL "FIELDSET-4"  */}

          <article className="fieldset-4__article js_twitter">
            <h2 className="js_error_msg fieldset-4___article--title">
              La tarjeta ha sido creada:
            </h2>

            <div className="js_div_share">
              <p className="js_paragraph fieldset-4__article--paragraph">
                Aquí irá el enlace de tu tarjeta
              </p>
            </div>

            <a
              className="js_share_twitter fieldset-4__article--button"
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>Compartir en Twitter
            </a>
          </article>
        </form>
      </main>

      <footer className="footer">
        <p className="footer__copyright">Commit Land Cards ©2022</p>
        <figure className="footer__logo">
          <img
            className="footer__image"
            src={adalab}
            alt="Logo de Adalab"
            title="Adalab"
            width="100%"
          />
        </figure>
      </footer>
    </div>
  );
}

export default App;
