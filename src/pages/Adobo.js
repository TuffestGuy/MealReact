import React, {useState, useEffect} from 'react';
import Axios from 'axios'
import '../App.css';

function Adobo(){
    const [recipe, setRecipe] = useState([]);
    useEffect(() => {
        Axios.get('http://localhost:3001/adobo', {withCredentials: true})
        .then( res => {
            console.log(res.data.meals[0])
            setRecipe(res.data.meals[0]);
        })
        .catch(error => {
            console.log(error)
        })
    }, []);

   return(
    <div>
        <img src={recipe.strMealThumb} alt="Adobo" width="500px" height="500px" className="center-img"/>
        <div className="recipe-text-container">{recipe.strMeal}</div>
      <div style={{ display: "flex", gap: "32px", justifyContent: "center", alignItems: "flex-start" }}>
    <div className="ingredients-container">
        <h4>These are the ingredients needed:</h4>
        <ul>
            {Array.from({length: 20}, (_, i) => {
                const ingredient = recipe[`strIngredient${i+1}`];
                const measure = recipe[`strMeasure${i+1}`];
                return ingredient && ingredient.trim() !== "" ? (
                    <li key={i}>{measure} {ingredient}</li>
                ) : null;
            })}
        </ul>
    </div>
    <div className="instructions-container">
        <h4>Instructions:</h4>
        <p>{recipe.strInstructions}</p>
    </div>
</div>
    </div>
)
}

export default Adobo