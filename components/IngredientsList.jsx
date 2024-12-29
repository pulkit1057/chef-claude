export default function IngredientsList(props) {
    const i = props.ingredients.map(ingredient => (<li key={ingredient}>{ingredient}</li>))
    return (
        <section>
            <h2>Ingredients on hand:</h2>
            <ul className="ingredients-list" aria-live="polite">{i}</ul>

            {props.ingredients.length > 3 && <div className="get-recipe-container">
                <div>
                    <h3>Ready for a Recipe?</h3>
                    <p>Generate a recepe from your list of ingredients.</p>
                </div>
                <button onClick={props.getRecipe}>Get a recipe</button>
            </div>}
        </section>
    );
}