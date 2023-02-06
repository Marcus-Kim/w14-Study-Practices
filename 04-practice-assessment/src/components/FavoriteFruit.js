import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FavFruitContext } from "../context/FavFruitContext";

const FavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useContext(FavFruitContext)
  console.log(favFruitId)
  const fruit = fruits.find(fruit => fruit.id === favFruitId)

  return (
    <div className="fav-fruit">
      <h2>Favorite Fruit</h2>
      <NavLink to={`/fruits/${favFruitId}`}>{fruit.name}</NavLink>
    </div>
  );
}

export default FavoriteFruit;
