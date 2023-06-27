import { useEffect, useState } from 'react';
import './Instructions.css';
import Button from '../ButtonContent';
import languageIcon from '../../assets/icons/language.png';

const Instructions = ({ ProductType }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  const [instructionsContent, setInstructionContent] = useState();

  useEffect(() => {
    setInstructionContent(ProductType?.strInstructions);
  }, [ProductType])
  // FUNTIONS -------------------------------
  const handleTranslateIntructions = (byLang) => {
    console.log("byLang:", byLang)
    setInstructionContent(ProductType[byLang])
  }
  // RETURN ---------------------------------
  return (
    <div
      className="Instructions"
    >
      <div>
        <p className="ProductPage__content__section__title">Instructions</p>
      </div>
      <div className="ProductPage__content__section__instructions">
        <Button
          text={"EN"}
          icon={languageIcon}
          callback={() => handleTranslateIntructions("strInstructions")}
          className='ProductPage__button__style'
        />
        {ProductType?.strInstructionsES ?
          <Button
            text={"ES"}
            icon={languageIcon}
            callback={() => handleTranslateIntructions("strInstructionsES")}
            className='ProductPage__button__style'
          />
          :
          null
        }
        {ProductType?.strInstructionsDE ?
          <Button
            text={"DE"}
            icon={languageIcon}
            callback={() => handleTranslateIntructions("strInstructionsDE")}
            className='ProductPage__button__style'
          />
          :
          null
        }
        {ProductType?.strInstructionsFR ?
          <Button
            text={"FR"}
            icon={languageIcon}
            callback={() => handleTranslateIntructions("strInstructionsFR")}
            className='ProductPage__button__style'
          />
          :
          null
        }
        {ProductType?.strInstructionsIT ?
          <Button
            text={"IT"}
            icon={languageIcon}
            callback={() => handleTranslateIntructions("strInstructionsIT")}
            className='ProductPage__button__style'
          />
          :
          null
        }
      </div>
      <div className="ProductPage__content__section__text">
        {instructionsContent}
      </div>
    </div>
  );
}

export default Instructions;