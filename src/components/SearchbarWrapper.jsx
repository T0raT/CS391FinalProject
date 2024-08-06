// Search Bar that user sees on their screens. contains the Styling of the input fields and buttons as well
// as calling other functions when the Search button is clicked in order to make a query, call the API, display the results.

// potential form fields for additional criteria could be : maxCalories, type of meal, diet types, a sorting button

// All work Here was done by Carlos Contreras

import { useState } from "react";
import styled from "styled-components";
import DataFetcher from "./DataFetcher.jsx";
import QueryBuilder from "./QueryBuilder.jsx";
import { ProductCard } from "./ProductCard.jsx";

const FlexMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  //    Width and height to be decided later
`;

// to style the layout of the input field and buttons
const MainContainer = styled.div`
  background: rgb(0, 146, 66);

  border: 2px solid #050505;
  padding: 1em;
  margin-bottom: 1em;
  max-width: 100vw;
  border-radius: 10px;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

// to style the containers for the 3 basic elements. query search, additional criteria settings, and buttons including search.

const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 1em;

  //border: 2px solid #ffec1c;
`;

//container for all the criteria label-value pairs.
const CriteriaContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 1em;

  //border: 2px solid #c50c0c;
`;

// container for one individual criteria pairing of label and value fields.

const CriteriaItem = styled.div`
  max-width: 25%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
`;

const ButtonContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;

  // border: 2px solid #c50c0c;
`;

// to style the elements inside the containers, these are the input fields and buttons themselves.

const Searchbar = styled.input`
  width: 90%;
  padding: 1rem;
  border-radius: 20px;
  border: 2px solid #020202;
  font-size: calc(1vw + 1vh);
  font-style: italic;
  color: black;
`;
const Button = styled.button`
  max-width: 10em;
  padding: 1rem;
  border-radius: 20px;
  border: 2px solid #020202;
  cursor: pointer;
  font-size: calc(5px + 1vmin);
  font-style: bold;
`;

const Label = styled.label`
  color: white;
  margin-bottom: 0.5rem;
  font-size: calc(10px + 1vmin);
`;

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid #020202;
  font-size: calc(10px + 1vmin);
`;

export default function SearchbarWrapper() {
  // using UseState to keep track of the query input field values.
  // setState is handled whenever the user changes the input field value.
  const [searchValue, setSearchValue] = useState("");
  const [maxCalories, setMaxCalories] = useState("");
  const [mealType, setMealType] = useState("");
  const [dietType, setDietType] = useState("");
  const [query, setQuery] = useState(null);

  // local function to handle what happens when the search button is clicked. Essentially input fields are passed on to DataFetcher to
  //const SearchParameters = () => {}
  const Search = () => {
    const APIcallstring = QueryBuilder(
      searchValue,
      maxCalories,
      mealType,
      dietType,
    );
    setQuery(APIcallstring);
  };

  return (
    <>
      <header>
        <MainContainer>
          <SearchContainer>
            <Searchbar
              type="search"
              placeholder="What would you like to cook today?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
            />
          </SearchContainer>

          <CriteriaContainer>
            <CriteriaItem>
              <Label htmlFor="maxCalories">Max Calories</Label>
              <Input
                type="number"
                id="maxCalories"
                name="maxCalories"
                placeholder="optional number e.g. 300"
                value={maxCalories}
                onChange={(e) => setMaxCalories(e.target.value)}
              />
            </CriteriaItem>

            <CriteriaItem>
              <Label htmlFor="DietType">Diet Type</Label>
              <Input
                type="string"
                id="DietType"
                name="DietType"
                placeholder="e.g Vegetarian"
                value={dietType}
                onChange={(e) => setDietType(e.target.value)}
              />
            </CriteriaItem>

            <CriteriaItem>
              <Label htmlFor="mealType">Meal Type</Label>
              <Input
                type="text"
                id="mealType"
                name="mealType"
                placeholder="e.g., Dinner"
                value={mealType}
                onChange={(e) => setMealType(e.target.value)}
              />
            </CriteriaItem>
          </CriteriaContainer>

          <ButtonContainer>
            <Button>Switch Theme </Button>
            <Button onClick={Search}>Search</Button>
          </ButtonContainer>
        </MainContainer>
      </header>
      <FlexMain>{query && <DataFetcher query={query} />}</FlexMain>
    </>
  );
}
