import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './ProductsListPage.css';
import { useEffect, useState } from 'react';
import PageToolbar from '../../components/PageToolbar';
import Backbutton from '../../components/BackButton/Backbutton';
import CardDrinkSmall from '../../components/CardDrinkSmall';
import { getCategoryList, getFilteredIngredient } from '../../utils/dataFetch';
import { localGet, localSave } from '../../utils/localStorage';
import { pageAnimation } from '../../utils/motionAnimations';
import { motion } from "framer-motion";


const ProductsListPage = () => {
  // VARIABLES ------------------------------
  let { listName } = useParams();
  const location = useLocation();
  const urlProps = location.state;
  console.log(urlProps);
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [productsInfo, setProductsInfo] = useState({});
  // FUNTIONS -------------------------------
  useEffect(() => {
    if (urlProps?.type === "category" || urlProps.dir === "back") {
      if (urlProps.dir === "back") {
        setProductsInfo(localGet(listName))
      } else {
        handleGetCategoryData(urlProps?.categoryName, setProductsInfo, urlProps?.categoryNameFormated)
      }
    } else {
      if (urlProps?.state?.data) {
        setProductsInfo(urlProps.data);
      } else {
        handleFiltered(listName, setProductsInfo, listName);
      }
    }
  }, []);

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
  const handleGetCategoryData = async (name, setTo, setName) => {
    const auxArr = [];
    const aux = await getCategoryList(name);
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

  const handleOpenOtherCocktailPageInfo = (cocktailId) => {
    console.log("handleOpenOtherCocktailPageInfo :", cocktailId);
    return navigate("/product/" + cocktailId, {
      state: {
        dir: "forward",
        from: "/products/" + listName,
      }
    })
  }
  // RETURN ---------------------------------
  return (
    <motion.div
      variants={pageAnimation()}
      initial="initial"
      animate="final"
      className="ProductsListPage">
      <div className='ProductsListPage__header'>

        <PageToolbar
          leftButton={<Backbutton styleClass={"ProductPage__backbutton"} to='/' />}
        />
      </div>

      <div className='ProductsListPage__content'>
        <h1 className='ProductsListPage__content__title'>{productsInfo.name}</h1>

        <div className='ProductsListPage__content__list'>
          {productsInfo?.allDrinks?.map((drink, index) => {
            return (
              <CardDrinkSmall drink={drink} key={index + "ProductsListPage" + drink.idDrink} callback={handleOpenOtherCocktailPageInfo} />
            )
          })}
        </div>
      </div>

    </motion.div>
  );
}

export default ProductsListPage;