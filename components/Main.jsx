import React from "react";
import CloudeRecipe from "./CloudeRecipe";
import IngredientsList from "./IngredientsList";
export default function Main() {
    const [showRecipe, setResipe] = React.useState(false)
    const [ingredients, setIngredients] = React.useState([])

    const i = ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient")

        setIngredients(function (prevIngredients) {
            return [...prevIngredients, newIngredient]
        })
        event.target.reset();
    }


    function getRecipe() {
        setResipe(prev => !prev)
    }


    return (
        <main>
            <form
                onSubmit={handleSubmit}
                className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="add ingredients"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            {i.length > 0 && <IngredientsList />}

            {showRecipe && <CloudeRecipe />}
        </main>
    )
}
