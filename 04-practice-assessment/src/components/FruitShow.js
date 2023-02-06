import { useParams } from "react-router-dom";

function FruitShow({ fruits }) {
  const { fruitId } = useParams()
  const fruit = fruits.find(fruit => fruit.id === fruitId);
  console.log(fruit)
  return (
    <div className="fruit-show">
      <h2>{fruit.name}</h2>
      <ul>
        <li id={'color'}>Color: {fruit.color}</li>
        <li id={'sweetness'}>Sweetness: {fruit.sweetness}</li>
        <li id={'seeds'}>Seeds: {fruit.seeds}</li>

      </ul>
    </div>
  );
}

export default FruitShow;
