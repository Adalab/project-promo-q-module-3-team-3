import "../styles/layout/Share.scss";
import Twitter from "./Twitter";

function Share(props) {
    return <fieldset className="fieldset-3">
        <legend className="js_title_share fieldset-3__legend">
            <i className="fa-solid fa-share-nodes"></i>
            <h2 className="fieldset-3__legend--title">comparte</h2>
            <i className="js_arrow_share fa-solid fa-rocket fieldset__2--iconArrow"></i>
        </legend>

        <button
            className="js_content_share fieldset-3__button"
            onClick={props.handleCreateCard}
        >
            <i className="fa-solid fa-address-card"></i>crear tarjeta
        </button>
        <Twitter resultCard={props.resultCard} />
    </fieldset>
}

export default Share;