import { useNavigate } from 'react-router-dom';
import { pageAnimation } from '../../utils/motionAnimations';
import './HomePage.css';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { getCategories, getFilteredIngredient, getRandom } from '../../utils/dataFetch';
import ButtonContent from '../../components/ButtonContent';

import CardsSwiper from '../../components/CardsSwiper';
import CardDrinkSmall from '../../components/CardDrinkSmall';
import Button from '../../components/Button';
import { localGet, localSave } from '../../utils/localStorage';


const HomePage = () => {
  // VARIABLES ------------------------------
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [categories, setCategories] = useState(localGet("categories"));
  const [random, setRandom] = useState(localGet("random"));
  const [sectionFiltered1, setSectionFiltered1] = useState(localGet("sectionFiltered1"));
  // FUNTIONS -------------------------------
  useEffect(() => {
    if (localGet("categories") == []) handleGetCategories();
    if (localGet("random") == []) handleGetRandom();
    if (localGet("sectionFiltered1") == []) handleFiltered("Vodka")
  }, [])

  const handleGetCategories = async () => {
    const aux = await getCategories();
    localSave("categories", aux);
    setCategories(aux);
  }

  const handleGetRandom = async () => {
    const auxArr = [];
    for (let index = 0; index < 10; index++) {
      const aux = await getRandom();
      auxArr.push(aux[0])
    }
    localSave("random", auxArr);
    setRandom(auxArr)
  }

  const handleFiltered = async (name) => {
    const auxArr = [];
    const aux = await getFilteredIngredient(name);
    console.log(aux)

    for (let index = 0; index < 10; index++) {
      auxArr.push(aux[index])
    }
    setSectionFiltered1(
      {
        drinks: auxArr,
        total: aux.length,
        name: name,
        allDrinks: aux
      }
    )
    localSave("sectionFiltered1", {
      drinks: auxArr,
      total: aux.length,
      name: name,
      allDrinks: aux
    });
  }

  const handleOpenProductPage = (productId) => {
    return navigate("/product/" + productId, {
      state: {
        dir: "forward"
      }
    })
  }
  const handleOpenFilteredPage = () => {
    return navigate("/product/" + 0, {
      state: {
        dir: "forward",
        data: sectionFiltered1,
      }
    })
  }

  const handelOpenCategoryPage = (categoryName) => {
    return navigate("/category/" + categoryName, {
      state: {
        dir: "forward"
      }
    })
  }
  // RETURN ---------------------------------
  return (
    <motion.div
      className="HomePage"

      variants={pageAnimation()}
      initial="initial"
      animate="final"
    >
      {/* ------------ HEADER ----------------- */}
      <div className='HomePage__section__header'>
        <h1>Drinklandia</h1>
      </div>

      {/* --------------RANDOM---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>10 Randoms</h1>
          <Button onClickEv={() => { handleGetRandom() }} text={"Generate new"} />
        </div>
        <div className='HomePage__section__content'>
          <CardsSwiper data={random} />
        </div>
      </div>
      {/* --------------SECTION 1---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>{sectionFiltered1?.name}</h1>
          <Button onClickEv={() => { handleOpenFilteredPage() }} text={"Explore " + sectionFiltered1?.total + " more"} />
        </div>
        <div className='HomePage__section__content'>
          <div className='HomePage__section__content__categoryList'>
            {sectionFiltered1?.drinks.map((drink, index) => {
              return (
                <div className='HomePage__section__drinks__list'>
                  <CardDrinkSmall
                    drink={drink}
                    key={index + "sectionFiltered1" + drink.idDrink}
                    callback={() => handleOpenProductPage(drink.idDrink)}
                  />
                </div>
              )
            })}
          </div>
        </div>

      </div>
      {/* --------------CATEGORY---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>Category</h1>
        </div>
        <div className='HomePage__section__content'>
          <div className='HomePage__section__content__categoryList'>
            {categories?.map((category, index) => {
              return (
                <ButtonContent
                  className='HomePage__section__content__category_button'
                  text={category.strCategory}
                  key={index + "homepage" + categories}
                  callback={() => handelOpenCategoryPage(category.strCategory)}
                />
              )
            })}
          </div>
        </div>

      </div>
      {/* ------------------------ */}

    </motion.div>
  );
}

export default HomePage;