import "../styles/layout/_fieldset_1.scss";

function Design(props) {
  const handleInput = (ev) => {
    const inputValue = ev.currentTarget.value;
    const inputName = ev.currentTarget.name;
    props.handleInput({
      value: inputValue,
      name: inputName,
    });
  };

  return (
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
              checked={
                props.dataCard.palette === "1" ||
                (props.dataCard.palette !== "2" &&
                  props.dataCard.palette !== "3")
              }
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
              checked={props.dataCard.palette === "2"}
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
              checked={props.dataCard.palette === "3"}
            />
            <div className="pantone3__first"></div>
            <div className="pantone3__second"></div>
            <div className="pantone3__third"></div>
          </div>
        </div>
      </section>
    </fieldset>
  );
}

export default Design;