import Button from '../Button';
import './CardDrinkSmall.css';
import ForwardIcon from '../../assets/icons/angle-right.png';

const CardDrinkSmall = ({ drink, callback }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <div
      className="CardDrinkSmall"
      onClick={() => callback(drink.idDrink)}
    >
      <div className='CardDrinkSmall__sx'>
        <img className="CardDrinkSmall__img" src={drink.strDrinkThumb} alt="" />
      </div>
      <div className='CardDrinkSmall__center'>
        <p className='CardDrinkSmall__title'>{drink.strDrink}</p>
      </div>
      <div className='CardDrinkSmall__dx'>
        <Button styleClass='CardDrinkSmall__btn' imgUrl={[ForwardIcon]} onClickEv={() => callback(drink.idDrink)} />
      </div>
    </div>
  );
}

export default CardDrinkSmall;