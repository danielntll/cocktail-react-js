import { useLocation, useNavigate, useParams } from 'react-router-dom';
import './ProductsListPage.css';
import { useEffect, useState } from 'react';
import PageToolbar from '../../components/PageToolbar';
import Backbutton from '../../components/BackButton/Backbutton';
import CardDrinkSmall from '../../components/CardDrinkSmall';
import { getFilteredIngredient } from '../../utils/dataFetch';
import { localSave } from '../../utils/localStorage';


const ProductsListPage = () => {
  // VARIABLES ------------------------------
  let { listName } = useParams();
  const location = useLocation();
  const urlProps = location.state?.data;
  console.log(urlProps);
  const navigate = useNavigate();
  // CONDITIONS -----------------------------
  const [productsInfo, setProductsInfo] = useState({});
  // FUNTIONS -------------------------------
  useEffect(() => {
    if (urlProps) {
      setProductsInfo(urlProps);
    } else {
      handleFiltered(listName, setProductsInfo, listName);
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
    <div className="ProductsListPage">
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

    </div>
  );
}

export default ProductsListPage;