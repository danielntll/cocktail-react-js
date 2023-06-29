import { useState } from 'react';
import './SearchInput.css';
import ModalSearch from '../ModalSearch/ModalSearch';

const SearchInput = () => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [drinkName, setDrinkName] = useState("");
  // FUNTIONS -------------------------------
  const handleInput = (e) => {
    setDrinkName(e.target.value);
  }

  const handleSubmitSearch = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  }
  // RETURN ---------------------------------
  return (
    <>
      <form className='SearchInput' onSubmit={handleSubmitSearch} >
        <input
          className='SearchInput__input'
          type='text'
          placeholder='What are you looking for?'
          name='drink'
          value={drinkName}
          onChange={handleInput}
          required
        />
        <input
          className='SearchInput__submit'
          type="submit"
          value="Search"
        />
      </form>
      <ModalSearch setIsOpen={setIsModalOpen} isOpen={isModalOpen} search={drinkName} />
    </>
  );
}

export default SearchInput;