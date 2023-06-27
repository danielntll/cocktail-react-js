import Button from '../ButtonContent';
import './Ingredients.css';
import ForwardSmall from '../../assets/icons/angle-small-right.png';

const Ingredients = ({ ProductType, handleExporeByIngredients, displayClass = "ProductPage__content__ingredients__content" }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <div
      className="Ingredients"
    >
      <div>
        <p className="ProductPage__content__section__title">Ingredients</p>
      </div>
      <div className={displayClass}>
        {ProductType?.strIngredient1 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure1 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure1}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient1} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient1)}
            />
          </div>

          :
          null
        }
        {ProductType?.strIngredient2 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure2 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure2}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient2} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient2)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient3 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure3 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure3}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient3} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient3)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient4 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure4 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure4}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient4} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient4)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient5 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure5 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure5}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient5} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient5)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient6 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure6 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure6}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient6} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient6)}
            />
          </div>

          :
          null
        }
        {ProductType?.strIngredient7 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure7 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure7}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient7} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient7)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient8 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure8 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure8}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient8} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient8)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient9 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure9 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure9}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient9} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient9)}
            />

          </div>
          :
          null
        }
        {ProductType?.strIngredient10 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure10 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure10}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient10} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient10)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient11 ?

          <div className='Ingredients__container'>
            {ProductType?.strMeasure11 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure11}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient11} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient11)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient12 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure12 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure12}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient12} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient12)}
            />

          </div>
          :
          null
        }
        {ProductType?.strIngredient13 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure13 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure13}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient13} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient13)}
            />

          </div>
          :
          null
        }
        {ProductType?.strIngredient14 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure14 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure14}
                </p>
              </div>
              : null
            }

            <Button
              text={ProductType?.strIngredient14} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient14)}
            />
          </div>
          :
          null
        }
        {ProductType?.strIngredient15 ?
          <div className='Ingredients__container'>
            {ProductType?.strMeasure15 ?
              <div>
                <p className='Ingredients__container__title'>
                  {ProductType?.strMeasure15}
                </p>
              </div>
              : null
            }
            <Button
              text={ProductType?.strIngredient15} className='ProductPage__content__box'
              icon={ForwardSmall}
              callback={() => handleExporeByIngredients(ProductType?.strIngredient15)}
            />
          </div>
          :
          null
        }
      </div>


    </div>
  );
}

export default Ingredients;