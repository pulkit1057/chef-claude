import React from "react";
export default function Main() {


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

    // function handleSubmit(formData) {
    //     const newIngredient = formData.get("ingredient")

    //     setIngredients(function (prevIngredients) {
    //         return [...prevIngredients, newIngredient]
    //     })
    // }


    return (
        <main>
            <form
                onSubmit={handleSubmit}
                // action={handleSubmit}
                // method="post"
                className="add-ingredient-form">
                <input
                    type="text"
                    aria-label="add ingredients"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>Add Ingredient</button>
            </form>
            <ul>
                {i}
            </ul>
        </main>
    )
}


// import React from "react"

// export default function Main() {

//     const [ingredients, setIngredients] = React.useState([])

//     const ingredientsListItems = ingredients.map(ingredient => (
//         <li key={ingredient}>{ingredient}</li>
//     ))

//     function addIngredient(formData) {
//         const newIngredient = formData.get("ingredient")
//         setIngredients(prevIngredients => [...prevIngredients, newIngredient])
//     }

//     return (
//         <main>
//             <form action={addIngredient} className="add-ingredient-form">
//                 <input
//                     type="text"
//                     placeholder="e.g. oregano"
//                     aria-label="Add ingredient"
//                     name="ingredient"
//                 />
//                 <button>Add ingredient</button>
//             </form>
//             <ul>
//                 {ingredientsListItems}
//             </ul>
//         </main>
//     )
// }