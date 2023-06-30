import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { pageAnimation } from '../../utils/motionAnimations';
import { useEffect, useState } from "react";
import './ProductPage.css';
import { motion } from "framer-motion";
import ImgSelected from '../../components/ImgSelected';
import heartIcon from '../../assets/icons/heart.png';
import heartSelectedIcon from '../../assets/icons/heart-selected.png';

import Button from '../../components/ButtonContent';
import Instructions from '../../components/InstructionsSection';
import Ingredients from '../../components/IngredientsSection';
import ModalIngredients from '../../components/ModalIngredients/ModalIngredients';
import { getProductInfoById } from '../../utils/dataFetch';
import PageToolbar from '../../components/PageToolbar';
import Backbutton from '../../components/BackButton/Backbutton';

const ProductPage = () => {
  // VARIABLES ------------------------------
  let { productId } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const urlFrom = location.state?.from ? location.state?.from : undefined;
  console.log(urlFrom);
  // CONDITIONS -----------------------------
  const [isLiked, setIsLiked] = useState(false);
  const [isModalIngredients, setIsModalIngredients] = useState(false);
  const [searchIngredient, setSearchIngredient] = useState("");

  const [productData, setProductData] = useState();

  // FUNTIONS -------------------------------
  useEffect(() => {
    if (productId !== undefined) {
      handleGetData();
    }
  }, [productId]);

  const handleGetData = async () => {
    const aux = await getProductInfoById(productId);
    setProductData(aux);
  }

  const handleLikeProduct = () => {
    setIsLiked(!isLiked);
  }

  const handleExporeByIngredients = (Ingredient) => {
    console.log("handleExporeByIngredients : ", Ingredient);
    setIsModalIngredients(true);
    setSearchIngredient(Ingredient);
  }
  const handleExploreByCategory = (Category) => {
    const formated = Category.replace("/", "-");
    return navigate("/products/" + Category, {
      state: {
        dir: "forward",
        type: "category",
        categoryName: Category,
        categoryNameFormated: formated,
      }
    })
  }

  // RETURN ---------------------------------
  return (
    <>
      <motion.div
        className="ProductPage"
        variants={pageAnimation()}
        initial="initial"
        animate="final"
      >
        <div>
          <PageToolbar
            leftButton={<Backbutton styleClass={"ProductPage__backbutton"} to={urlFrom ? urlFrom : '/'} />}
          />
        </div>
        <div className="ProductPage__header">
          <img className="ProductPage__header__img" src={productData?.strDrinkThumb} alt={productData?.strImageAttribution} />
        </div>

        <div className="ProductPage__content">
          {/* NAME ---------------- */}
          <div className="ProductPage__content__header">
            <h2 className="ProductPage__content__header__name">
              {productData?.strDrink}
            </h2>
            <div className="ProductPage__content__header__like" onClick={() => handleLikeProduct()}>
              <ImgSelected images={[heartIcon, heartSelectedIcon]} styles={["text-filter", "primary-filter"]} isSelected={isLiked} />
            </div>
          </div>

          {/* INSTRUCTIONS --------------- */}
          <div className="ProductPage__content__section">
            <Instructions ProductType={productData} />
          </div>
          {/* INGREDIENTS ---------------- */}
          <div className="ProductPage__content__section">
            <Ingredients ProductType={productData} handleExporeByIngredients={handleExporeByIngredients} />
          </div>
          {/* CATEGORY --------------- */}
          <div className="ProductPage__content__section">
            <div>
              <p className="ProductPage__content__section__title">Category</p>
            </div>
            <div className="ProductPage__content__section__type">
              <Button
                text={productData?.strCategory}
                callback={() => handleExploreByCategory(productData?.strCategory)}
                className='ProductPage__button__style' />
            </div>
          </div>
          {/* GLASS --------------- */}
          {/* <div className="ProductPage__content__section">
            <div>
              <p className="ProductPage__content__section__title">Glass</p>
            </div>
            <div className="ProductPage__content__section__type">
              <Button text={productData?.strGlass} className='ProductPage__button__style' />
            </div>
          </div> */}
        </div>
      </motion.div>
      {/* MODALS -------------------------------------- */}
      {isModalIngredients ?
        <ModalIngredients isOpen={isModalIngredients} setIsOpen={setIsModalIngredients} searchIngredient={searchIngredient} />
        : null}

    </>

  );
}

export default ProductPage;