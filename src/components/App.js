import "../styles/App.scss";

function App() {
  return (
    <div>
      <header className="header">
        <figure className="header__figure">
          <img
            src="./assets/images/commit_land_logo.png"
            alt="logo-awesome-profile-cards"
            className="header__figure--logo"
          />
        </figure>
      </header>

      <main className="main">
        <section
          className="preview"
          style="background-image:url(./assets/images/roller.png)"
        >
          <div className="wrapper">
            <button className="preview__button js-reset-button">
              <i className="fa-regular fa-trash-can"></i>Reset
            </button>

            <article className="card js_cardPreview">
              <div className="card__rectangle"></div>
              <div className="card__info">
                <h3 className="card__name js_cardname">Nombre Apellido</h3>
                <p className="card__job js_cardjob">Front-end developer</p>
              </div>
              <div className="card__photo">
                <div className="profile">
                  <div
                    className="profile__image js__profile-image"
                    style="background-image:url(./assets/images/astronaut2.png)"
                  ></div>
                </div>
                <nav className="card__footer">
                  <ul className="socialmedia">
                    <li>
                      <a
                        className="js_cardtel"
                        href="#"
                        title="Teléfono"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-solid fa-mobile-screen-button"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardemail"
                        href="#"
                        title="Correo"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-regular fa-envelope"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardlinkedin"
                        href="#"
                        title="LinkedIn"
                        target="_blank"
                      >
                        <i className="socialmedia__icon fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a
                        className="js_cardgithub"
                        href="#"
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
                    id="check1"
                    name="select"
                    checked=""
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
                    id="check2"
                    name="select"
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
                    id="check3"
                    name="select"
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
            <div className="js_content_fill fieldset__2--div collapsed">
              <label className="label" htmlFor="firstAndSecondName">
                Nombre completo
              </label>
              <input
                placeholder="Ej: Sally Jill"
                type="text"
                name="firstAndSecondName"
                id="firstAndSecondName"
                className="fieldset__2--input js_name"
              />
              <label className="label" htmlFor="work">
                Puesto
              </label>
              <input
                placeholder="Ej: Front-end unicorns"
                type="text"
                name="work"
                id="work"
                className="fieldset__2--input js_job"
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
                  className="profile__preview js__profile-preview"
                  style="background-image:url(./assets/images/astronaut2.png)"
                ></div>
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
              />
              <label className="label" htmlFor="tel">
                Teléfono
              </label>
              <input
                placeholder="Ej. 555-55-55-55"
                type="tel"
                name="tel"
                id="tel"
                className="fieldset__2--input js_tlf"
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
              />
            </div>
          </fieldset>

          <fieldset className="fieldset-3">
            <legend className="js_title_share fieldset-3__legend">
              <i className="fa-solid fa-share-nodes"></i>
              <h2 className="fieldset-3__legend--title">comparte</h2>
              <i className="js_arrow_share fa-solid fa-rocket fieldset__2--iconArrow"></i>
            </legend>

            <button className="js_content_share fieldset-3__button collapsed">
              <i className="fa-solid fa-address-card"></i>crear tarjeta
            </button>
          </fieldset>

          {/* EMPIEZA AQUÍ EL "FIELDSET-4"  */}

          <article className="fieldset-4__article js_twitter collapsed">
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
            src="./assets/images/logo-adalab.png"
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
