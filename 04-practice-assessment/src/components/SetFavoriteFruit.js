import { useContext } from "react";
import { FavFruitContext } from "../context/FavFruitContext";
import FruitsIndex from "./FruitsIndex";

const SetFavoriteFruit = ({ fruits }) => {
  const { favFruitId, setFavFruitId } = useContext(FavFruitContext)

  let fruit = fruits.find(fruit => fruit.id === favFruitId);

  return (
    <div className="set-fav-fruit">
      <h2>Select your Favorite Fruit</h2>
      <label>
        <select
          value={favFruitId}
          onChange={e => setFavFruitId(e.target.value)}
        >
          {fruits.map(fruit => (
            <option
              key={fruit.id}
              value={fruit.id}
            >
              {fruit.name}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export default SetFavoriteFruit;
