import './ImgSelected.css';

const ImgSelected = ({ images, isSelected = false, styles = ["primary-filter", ""] }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <img
      src={isSelected ? images[1] : images[0]}
      className={isSelected ? "ImgSelected " + styles[1] : "ImgSelected " + styles[0]}
    />
  );
}

export default ImgSelected;