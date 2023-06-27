import { useEffect, useRef, useState } from 'react';
import './ModalIngredients.css';
import { motion, animate } from "framer-motion";
import BackIcon from '../../assets/icons/angle-left.png';
import Button from '../Button';
import PageToolbar from '../PageToolbar';
import { getIngredientData, getProductsByIngredient } from '../../utils/dataFetch';
import CardDrinkSmall from '../CardDrinkSmall';
import { useNavigate } from 'react-router-dom';

const ModalIngredients = ({
  isOpen = true,
  setIsOpen,
  searchIngredient,
}) => {
  // VARIABLES ------------------------------
  const modal = useRef(null);
  const [ingredientData, setIngredientData] = useState();
  const [otherCocktails, setOtherCocktails] = useState();
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  useEffect(() => {
    if (isOpen === true)
      animate(modal.current, { opacity: 1, height: "100vh" }, { duration: 0.2 });
  }, [isOpen]);


  const handleGetData = async () => {
    const aux = await getIngredientData(searchIngredient);
    setIngredientData(aux[0]);
  }
  const handleGetCocktails = async () => {
    const aux = await getProductsByIngredient(searchIngredient);
    setOtherCocktails(aux);
  }
  useEffect(() => {
    handleGetData()
    handleGetCocktails();
  }, [searchIngredient])


  const handleOpenOtherCocktailPageInfo = (cocktailId) => {
    console.log("handleOpenOtherCocktailPageInfo :", cocktailId);
    closeAnimation(navigate("/product/" + cocktailId, {
      state: {
        dir: "forward"
      }
    }))
  }

  // FUNTIONS -------------------------------
  const closeAnimation = (otherAction) => {
    const animation = animate(modal.current, { opacity: 0, height: "0vh" }, { duration: 0.2 });
    animation.then(() => {
      console.log("completed");
      setIsOpen(false);
      otherAction ? otherAction : null
    })
  }
  // RETURN ---------------------------------
  return (
    <motion.div ref={modal} className="ModalIngredients" style={{ display: isOpen ? "block" : "none" }}>
      <div className='ModalIngredients__header'>
        <PageToolbar
          leftButton={<Button styleClass='ModalIngredients__Button' imgUrl={[BackIcon]} onClickEv={() => closeAnimation()} />}
          pageTitle={searchIngredient}
          rightButton={<></>}
        />
      </div>
      <div className='ModalIngredients__content'>
        <div className='ModalIngredients__section'>
          <p className='ModalIngredients__section__title'>
            Type:
          </p>
          <p className='ModalIngredients__section__content'>
            {ingredientData?.strType}
          </p>
        </div>

        <div className='ModalIngredients__section'>
          <p className='ModalIngredients__section__title'>
            Alcohol:
          </p>
          <p className='ModalIngredients__section__content'>
            {ingredientData?.strAlcohol}
          </p>
        </div>

        <div className='ModalIngredients__section'>
          <p className='ModalIngredients__section__title'>
            Description:
          </p>
          {ingredientData?.strDescription ?
            <p className='ModalIngredients__section__content'>
              {ingredientData?.strDescription}
            </p>
            :
            <p className='ModalIngredients__section__content'>No description.</p>
          }
        </div>

        <div className='ModalIngredients__section'>
          <p className='ModalIngredients__section__title'>
            Other cocktails:
          </p>
          <div className='ModalIngredients__section__content'>
            <div className='ModalIngredients__section__content__list'>

              {otherCocktails?.map((drink, index) => {
                return (
                  <CardDrinkSmall drink={drink} key={index + "otherCocktails" + drink.idDrink} callback={handleOpenOtherCocktailPageInfo} />
                )
              })}
            </div>
          </div>
        </div>

      </div>
    </motion.div>
  );
}

export default ModalIngredients;