import styled from 'styled-components'
import {ProductCard} from "./components/ProductCard.jsx";


const FlexMain = styled.main`
    display: flex;
    flex-wrap: wrap;
//    Width and height to be decided later
`



function App() {
  const recipes = [
    //   Using a temp array of objects to simulate data from an API
    {
      id: 1,
      title: "Spaghetti Carbonara",
      ingredients: [
        "200g spaghetti",
        "100g pancetta",
        "2 large eggs",
        "50g pecorino cheese",
        "50g parmesan",
        "2 cloves of garlic",
        "Salt and pepper",
        "Fresh parsley"
      ],
      instructions: [
        "Cook the spaghetti in a large pot of boiling salted water until al dente.",
        "Fry the pancetta with the garlic until crispy.",
        "Beat the eggs in a bowl, then add the grated pecorino and parmesan cheese.",
        "Drain the spaghetti and add it to the pancetta. Remove from heat.",
        "Quickly mix in the egg and cheese mixture, stirring constantly to create a creamy sauce.",
        "Season with salt and pepper, and garnish with fresh parsley."
      ],
      image: "https://example.com/spaghetti-carbonara.jpg"
    },
    {
      id: 2,
      title: "Chicken Alfredo",
      ingredients: [
        "200g fettuccine",
        "2 chicken breasts",
        "2 cups heavy cream",
        "1 cup grated parmesan cheese",
        "2 cloves of garlic",
        "Salt and pepper",
        "Fresh parsley"
      ],
      instructions: [
        "Cook the fettuccine in a large pot of boiling salted water until al dente.",
        "Season the chicken breasts with salt and pepper, then cook in a skillet until golden brown. Slice into strips.",
        "In the same skillet, sauté the garlic until fragrant, then add the heavy cream and bring to a simmer.",
        "Stir in the grated parmesan cheese until melted and smooth.",
        "Add the cooked fettuccine and chicken strips to the sauce, tossing to coat.",
        "Season with salt and pepper, and garnish with fresh parsley."
      ],
      image: "https://example.com/chicken-alfredo.jpg"
    },
  ];

  return (
      <>
      <header>
      {/* Search bar and dark/light mode toggle here */}
      </header>
      <FlexMain>
        {/* All reciepie cards are rendered here */}
        {recipes.map((recipe) => (
          <ProductCard key={recipe.id} recipe={recipe} />
        ))}
      </FlexMain>
      </>
  )
}

export default App
