import ButtonContent from '../ButtonContent';
import './Card.css';
import forwardIcon from '../../assets/icons/angle-right.png'
import eye from '../../assets/icons/eye.png'
import { useNavigate } from 'react-router-dom';
import Ingredients from '../IngredientsSection';
import { useState } from 'react';

const Card = ({ data }) => {
  // VARIABLES ------------------------------
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [isModalIngredients, setIsModalIngredients] = useState(false);
  const [searchIngredient, setSearchIngredient] = useState("");
  // FUNTIONS -------------------------------
  const handelOpenCategoryPage = (name) => {
    const formated = name.replace("/", "-");
    return navigate("/products/" + name, {
      state: {
        dir: "forward",
        type: "category",
        categoryName: name,
        categoryNameFormated: formated,
      }
    })
  }

  const handleOpenProductPage = () => {
    return navigate("/product/" + data.idDrink, {
      state: {
        dir: "forward"
      }
    })
  }

  const handleExporeByIngredients = (Ingredient) => {
    console.log("handleExporeByIngredients : ", Ingredient);
    setIsModalIngredients(true);
    setSearchIngredient(Ingredient);
  }

  // RETURN ---------------------------------
  return (
    <div
      className="Card"
    >
      <div className='Card__img__container'>
        <img className='Card__img' src={data.strDrinkThumb} alt="" />
      </div>
      <div className='Card__content'>
        <div className='Card__content__section'>
          <p className='Card__title'>
            {data.strDrink}
          </p>
        </div>
        <div className="ProductPage__content__section">
          <ButtonContent
            text={"Open drink page"}
            icon={eye}
            className='Card__content__btn'
            callback={() => handleOpenProductPage()}
          />
        </div>

        {/* INGREDIENTS ---------------- */}
        <div className="ProductPage__content__section">
          <Ingredients displayClass={"Card__content__ingredients"} ProductType={data} handleExporeByIngredients={handleExporeByIngredients} />
        </div>
        {/* CATEGORY ------------------ */}
        <div className='Card__content__section'>
          <div>
            <p className='Card__content__section__title'>Category</p>
          </div>
          <div>
            <ButtonContent
              text={data.strCategory}
              icon={forwardIcon}
              className='Card__content__btn'

              callback={() => handelOpenCategoryPage(data.strCategory)}
            />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Card;