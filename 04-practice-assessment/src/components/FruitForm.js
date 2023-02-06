import { useEffect } from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";

const COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple"
];

function FruitForm({ fruits }) {
  //TODO Make name, sweetness, seeds, and color inputs into controlled inputs
  const [name, setName] = useState('');
  const [sweetness, setSweetness] = useState(1);
  const [seeds, setSeeds] = useState('yes');
  const [color, setColor] = useState(COLORS[0]);
  const [errors, setErrors] = useState([]);
  const history = useHistory();

  useEffect(() => { // Validations
    const errors = [];
    // if the name is less than 3 characters
    if (name.length < 3) errors.push('Name must be 3 or more characters');
    // if the name is more than 20 characters
    if (name.length > 20) errors.push('Name must be 20 characters or less');
    // if the name already exists
    fruits.forEach(fruit => {
      if (fruit.name === name) errors.push('Name already exists');
    });
    // if the sweetness is greater than 10 or less than 1
    if (sweetness > 10 || sweetness < 1) errors.push('Sweetness must be between 1 and 10');

    // set the errors state to the new errors array with populated errors
    setErrors(errors);
  }, [name, sweetness, fruits])

  const onSubmit = (e) => {
    e.preventDefault();
    
    const formValues = {
      name,
      sweetness,
      color,
      seeds
    }

    console.log(formValues);
    history.push('/')
  }

  return (
    <form
      className="fruit-form"
      onSubmit={onSubmit}
    >
      <h2>Enter a Fruit</h2>
      <ul className="errors">
        {errors.map(error => {
          return <li key={error}>{error}</li>
        })}
      </ul>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </label>
      <label>
        Select a Color
        <select
          value={color}
          onChange={e => setColor(e.target.value)}
        >
          {COLORS.map(color => (
            <option
              key={color}
              value={color}
            >
              {color}
            </option>
          ))}
        </select>
      </label>
      <label>
        Sweetness
        <input
          type="number"
          name="sweetness"
          value={sweetness}
          onChange={e => setSweetness(e.target.value)}
        />
      </label>
      <label>
        <input
          type="radio"
          value="no"
          name="seeds"
          checked={seeds === "no"}
          onChange={e => setSeeds(e.target.value)}
        />
        No Seeds
      </label>
      <label>
        <input
          type="radio"
          value="yes"
          name="seeds"
          checked={seeds === "yes"}
          onChange={e => setSeeds(e.target.value)}
        />
        Seeds
      </label>
      <button
        type="submit"
        disabled={errors.length ? true : false}
      >
        Submit Fruit
      </button>
    </form>
  );
}

export default FruitForm;
