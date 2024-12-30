import React from "react";
import CloudeRecipe from "./CloudeRecipe";
import IngredientsList from "./IngredientsList";
// import {getRecipeFromMistral } from "../ai.js";

export default function Main() {
    const [showRecipe, setResipe] = React.useState(false)
    // const [ingredients, setIngredients] = React.useState([])
    const [ingredients, setIngredients] = React.useState(["potatos","onions","wheat","all indian spices"])


    function handleSubmit(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        const newIngredient = formData.get("ingredient")

        setIngredients(prevIngredients => [...prevIngredients, newIngredient])
        event.target.reset();
    }


    async function getRecipe() {
        // const recipeMarkdown = async 
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
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}

            {showRecipe && <CloudeRecipe />}
        </main>
    )
}
