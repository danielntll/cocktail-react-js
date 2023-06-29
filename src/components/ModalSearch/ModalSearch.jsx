import { useEffect, useRef, useState } from 'react';
import './ModalSearch.css';
import { motion, animate } from "framer-motion";
import Button from '../Button';
import PageToolbar from '../PageToolbar';
import { useNavigate } from 'react-router-dom';

import CloseIcon from '../../assets/icons/cross-small.png';
import { getProductsByName } from '../../utils/dataFetch';
import CardDrinkSmall from '../CardDrinkSmall';

const ModalSearch = ({
  isOpen = true,
  setIsOpen,
  search,
}) => {
  // VARIABLES ------------------------------
  const modal = useRef(null);
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  // CONDITIONS -----------------------------
  useEffect(() => {
    if (isOpen === true)
      animate(modal.current, { opacity: 1, height: "100%" }, { duration: 0.2 });
  }, [isOpen]);


  useEffect(() => {
    if (search !== "") {
      handleSearchProductByName(search);
    }
  }, [search]);

  const handleSearchProductByName = async (search) => {
    const drinks = await getProductsByName(search);
    setProducts(drinks);
  }

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
    <motion.div ref={modal} className="ModalSearch" style={{ display: isOpen ? "block" : "none" }}>
      <div className='ModalSearch__header'>
        <PageToolbar
          leftButton={<Button styleClass='ModalSearch__Button' imgUrl={[CloseIcon]} onClickEv={() => closeAnimation()} />}
          pageTitle={search}
          rightButton={<></>}
        />
      </div>
      <div className='ModalSearch__content'>
        <div className='ModalSearch__section'>
          <div className='ModalSearch__section__title'>
            Found: {products.length} results.
          </div>

          {products?.map((drink, index) => {
            return (
              <CardDrinkSmall drink={drink} key={index + "products" + drink.idDrink} callback={handleOpenOtherCocktailPageInfo} />
            )
          })}
        </div>

      </div>
    </motion.div>
  );
}

export default ModalSearch;