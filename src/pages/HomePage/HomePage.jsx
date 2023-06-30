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
import SearchInput from '../../components/SearchInput/SearchInput';


const HomePage = () => {
  // VARIABLES ------------------------------
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [categories, setCategories] = useState(localGet("categories"));
  const [random, setRandom] = useState(localGet("random"));
  const [sectionFiltered1, setSectionFiltered1] = useState(localGet("sectionFiltered1"));
  const [sectionFiltered2, setSectionFiltered2] = useState(localGet("sectionFiltered2"));
  // FUNTIONS -------------------------------
  useEffect(() => {
    console.log(localGet("categories").length)
    if (localGet("categories").length === 0) handleGetCategories();
    if (localGet("random").length === 0) handleGetRandom();
    if (localGet("sectionFiltered1").length === 0) handleFiltered("Vodka", setSectionFiltered1, "sectionFiltered1")
    if (localGet("sectionFiltered2").length === 0) handleFiltered("Gin", setSectionFiltered2, "sectionFiltered2");
  }, [])

  const handleGetCategories = async () => {
    const aux = await getCategories();
    let auxFormated = aux.map(item => item.strCategory.replace('/', '-'));
    console.log(auxFormated)
    localSave("categories", {
      auxFormated: auxFormated,
      aux: aux,
    });

    setCategories({
      auxFormated: auxFormated,
      aux: aux,
    });
    console.log("AUX : ", {
      auxFormated: auxFormated,
      aux: aux,
    })
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

  const handleFiltered = async (name, setTo, setName) => {
    const auxArr = [];
    const aux = await getFilteredIngredient(name);
    console.log(aux)

    for (let index = 0; index < 10; index++) {
      auxArr.push(aux[index])
    }
    setTo(
      {
        drinks: auxArr,
        total: aux.length,
        name: name,
        allDrinks: aux
      }
    )
    localSave(setName, {
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

  const handleOpenFilteredPage = (data) => {
    return navigate("/products/" + data.name, {
      state: {
        dir: "forward",
        data: data,
      }
    })
  }

  const handelOpenCategoryPage = (categoryNameFormated, categoryName) => {
    return navigate("/products/" + categoryNameFormated, {
      state: {
        dir: "forward",
        type: "category",
        categoryName: categoryName,
        categoryNameFormated: categoryNameFormated,
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

      {/* --------------SEARCH SECTION ---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <SearchInput />
        </div>
      </div>
      {/* --------------CATEGORY---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>Category</h1>
        </div>
        <div className='HomePage__section__content'>
          <div className='HomePage__section__content__categoryList'>
            {categories?.aux?.map((category, index) => {
              return (
                <ButtonContent
                  className='HomePage__section__content__category_button'
                  text={category.strCategory}
                  key={index + "homepage" + categories?.auxFormated[index]}
                  callback={() => handelOpenCategoryPage(categories?.auxFormated[index], category.strCategory)}
                />
              )
            })}
          </div>
        </div>

      </div>
      {/* --------------SECTION 1---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>{sectionFiltered1?.name}</h1>
          <Button onClickEv={() => { handleOpenFilteredPage(sectionFiltered1) }} text={"Explore " + sectionFiltered1?.total + " more"} />
        </div>
        <div className='HomePage__section__content'>
          <div className='HomePage__section__content__categoryList'>
            {sectionFiltered1?.drinks?.map((drink, index) => {
              return (
                <div key={index + "sectionFiltered1" + drink.idDrink} className='HomePage__section__drinks__list'>
                  <CardDrinkSmall
                    drink={drink}
                    callback={() => handleOpenProductPage(drink.idDrink)}
                  />
                </div>
              )
            })}
          </div>
        </div>

      </div>
      {/* --------------SECTION 2---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>{sectionFiltered2?.name}</h1>
          <Button onClickEv={() => { handleOpenFilteredPage(sectionFiltered2) }} text={"Explore " + sectionFiltered2?.total + " more"} />
        </div>
        <div className='HomePage__section__content'>
          <div className='HomePage__section__content__categoryList'>
            {sectionFiltered2?.drinks?.map((drink, index) => {
              return (
                <div key={index + "sectionFiltered1" + drink.idDrink} className='HomePage__section__drinks__list'>
                  <CardDrinkSmall
                    drink={drink}
                    callback={() => handleOpenProductPage(drink.idDrink)}
                  />
                </div>
              )
            })}
          </div>
        </div>

      </div>
      {/* --------------RANDOM SECTION---------------- */}
      <div className='HomePage__section'>
        <div className='HomePage__section__header'>
          <h1 className='HomePage__section__header__title'>10 Randoms</h1>
          <Button onClickEv={() => { handleGetRandom() }} text={"Generate new"} />
        </div>
        <div className='HomePage__section__content'>
          <CardsSwiper data={random} />
        </div>
      </div>


      {/* ------------------------ */}

    </motion.div>
  );
}

export default HomePage;