import './ButtonContent.css';
import ForwardIcon from '../../assets/icons/angle-right.png';

const ButtonContent = ({ text = "ButtonContent", icon = ForwardIcon, className = "ButtonContent", callback = () => { console.log("Click ButtonContent") } }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <div
      className={"ButtonContent " + className}
      onClick={() => callback()}
    >
      <p>{text}</p>
      <img src={icon} alt="" />
    </div>
  );
}

export default ButtonContent;