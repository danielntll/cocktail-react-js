import './CategoryCard.css';

const CategoryCard = ({ category }) => {
  // VARIABLES ------------------------------
  // CONDITIONS -----------------------------
  // FUNTIONS -------------------------------
  // RETURN ---------------------------------
  return (
    <div
      className="CategoryCard"
    >
      {category.strCategory}
    </div>
  );
}

export default CategoryCard;