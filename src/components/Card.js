import Design from "./Design";
import Fill from "./Fill";
import Share from "./Share";

function Card(props) {
  return (
    <>
      <Design handleInput={props.handleInput} dataCard={props.dataCard} />
      {/* <Fill />
      <Share /> */}
    </>
  );
}

export default Card;
