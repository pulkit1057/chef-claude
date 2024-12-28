export default function IngredientsList() {
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{i}</ul>

            {i.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recepe from your list of ingredients.</p>
                </div>
                <button onClick={getRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}