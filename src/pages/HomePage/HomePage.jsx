import { useNavigate } from 'react-router-dom';
import { pageAnimation } from '../../utils/motionAnimations';
import './HomePage.css';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import { getCategories, getRandom } from '../../utils/dataFetch';
import ButtonContent from '../../components/ButtonContent';

import CardsSwiper from '../../components/CardsSwiper';

const HomePage = () => {
  // VARIABLES ------------------------------
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [categories, setCategories] = useState();
  const [random, setRandom] = useState([]);
  // FUNTIONS -------------------------------
  useEffect(() => {
    handleGetCategories();
    handleGetRandom();
  }, [])

  const handleGetCategories = async () => {
    const aux = await getCategories();
    setCategories(aux);
  }
  const handleGetRandom = async () => {
    const auxArr = [];
    for (let index = 0; index < 10; index++) {
      const aux = await getRandom();
      console.log(aux)
      auxArr.push(aux[0])
    }
    setRandom(auxArr)
  }

  const handleOpenProductPage = (productId) => {
    return navigate("/product/" + productId, {
      state: {
        dir: "forward"
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
        </div>
        <div className='HomePage__section__content'>
          <CardsSwiper data={random} />
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
                <ButtonContent className='HomePage__section__content__category_button'
                  text={category.strCategory}
                  key={index + "homepage" + categories}
                  callback={() => handelOpenCategoryPage(category.strCategory)}
                />
              )
            })}
          </div>
        </div>



        {/* ------------------------ */}
      </div>

    </motion.div>
  );
}

export default HomePage;