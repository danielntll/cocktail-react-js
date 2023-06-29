import Button from "../Button/Button";
import './Backbutton.css'
import BackIcon from '../../assets/icons/angle-left.png'
import { useNavigate } from "react-router-dom";

const Backbutton = ({ to = "/home", isBack, styleClass }) => {
  const navigate = useNavigate();
  console.log("BACK BUTTON : ", isBack)
  return (
    <Button styleClass={styleClass} imgUrl={[BackIcon]} onClickEv={() => {
      return navigate(isBack ? -1 : to, {
        state: {
          dir: "back",
        }
      })
    }} />
  );
}

export default Backbutton;