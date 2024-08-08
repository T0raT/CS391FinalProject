// Search Bar that user sees on their screens. contains the Styling of the input fields and buttons as well
// as calling other functions when the Search button is clicked in order to make a query, call the API, display the results.

// potential form fields for additional criteria could be : maxCalories, type of meal, diet types, a sorting button

// All work here done by Carlos Contreras with collaboration from Arien to set the darkmode theme on
// different elements

import {useContext, useState} from "react";
import styled from "styled-components";
import DataFetcher from "./DataFetcher.jsx";
import QueryBuilder from "./QueryBuilder.jsx";

import {DarkThemeContext} from "./DarkThemeContextProvider.jsx";

const FlexMain = styled.main`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2rem;
  height: auto;
  width: 100%;
  margin-top: 5rem;
  font-family: futura-pt-condensed, sans-serif;
`;

// to style the layout of the input field and buttons
const MainContainer = styled.div`
  background: rgb(0, 146, 66);

  // border props context added by Arien
  border: 2px solid ${(props) => (props.theme.dark ? "white" : "#1c2029")};
  
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
  border: 2px solid ${(props) => (props.theme.dark ? "white": "#020202")};
  font-size: calc(1vw + 1vh);
  font-style: italic;
  color: black;
  background-color: ${(props) => (props.theme.dark ? "#b7bdc9": "#ebebeb")};
  transition: 0.3s;
`;
const Button = styled.button`
  max-width: 10em;
  padding: 1rem;
  border-radius: 20px;
  border: 2px solid ${(props) => (props.theme.dark ? "white": "#020202")};
  cursor: pointer;
  font-size: calc(5px + 1vmin);
  background-color: ${(props) => (props.theme.dark ? "#b7bdc9": "#ebebeb")};
  transition: 0.3s;  
`;

const Label = styled.label`
  color: white;
  margin-bottom: 0.5rem;
  font-size: calc(10px + 1vmin);
`;

const Select = styled.select`
  width: 100%;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.theme.dark ? "white": "#020202")};
  font-size: calc(10px + 1vmin);
  background-color: ${(props) => (props.theme.dark ? "#b7bdc9": "#ebebeb")};
`;

const Input = styled.input`
  width: 100%;
  padding: 0.2rem;
  border-radius: 5px;
  border: 1px solid ${(props) => (props.theme.dark ? "white": "#020202")};
  font-size: calc(10px + 1vmin);
  background-color: ${(props) => (props.theme.dark ? "#b7bdc9": "#ebebeb")}

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
    const APIcallstring = QueryBuilder({
      searchValue,
      maxCalories,
      mealType,
      dietType,
    });
    setQuery(APIcallstring);
  };

  // darkContext added by Arien
  // the purpose of this is to connect it to the switching themes so that we can
  // use it for the other styled components
  const darkContext = useContext(DarkThemeContext);

  return (
    <>
      <header>
        <MainContainer theme={darkContext}>
          <SearchContainer>
            <Searchbar
              type="search"
              placeholder="What would you like to cook today?"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              theme={darkContext}
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
                theme={darkContext}
              />
            </CriteriaItem>

            <CriteriaItem>
              <Label htmlFor="DietType">Diet Type</Label>
              <Select name="DietType" id="DietType" value={dietType} theme={darkContext} onChange={(e) => setDietType(e.target.value)}>
                <option value="">Click to See Options</option>
                <option value="Vegetarian">Vegetarian</option>
                <option value="Ketogenic">Ketogenic</option>
                <option value="Lacto-Vegetarian">Lacto Vegetarian</option>
                <option value="Ovo-Vegetarian">Ovo-Vegetarian</option>
                <option value="Vegan">Vegan</option>
                <option value="Pescetarian">Pescetarian</option>
                <option value="Paleo">Paleo</option>
                <option value="Primal">Primal</option>
                <option value="Whole30">Whole30</option>
              </Select>

            </CriteriaItem>

            <CriteriaItem>
              <Label htmlFor="mealType">Meal Type</Label>
              <Select id="mealType" name="mealType" value={mealType} theme={darkContext} onChange={(e) => setMealType(e.target.value)}>
                <option value="">Click to See Options</option>
                <option value="main+course">main course</option>
                <option value="side+dish">side dish</option>
                <option value="dessert">dessert</option>
                <option value="appetizer">appetizer</option>
                <option value="salad">salad</option>
                <option value="bread">bread</option>
                <option value="breakfast">breakfast</option>
                <option value="soup">soup</option>
                <option value="beverage">beverage</option>
                <option value="sauce">sauce</option>
                <option value="marinade">marinade</option>
                <option value="fingerfood">fingerfood</option>
                <option value="snack">snack</option>
                <option value="drink">alcoholic drink</option>
              </Select>
            </CriteriaItem>
          </CriteriaContainer>

          <ButtonContainer>
            {/*<Button>Switch Theme </Button>*/}
            <Button onClick={Search} theme={darkContext}>Search</Button>
          </ButtonContainer>
        </MainContainer>
      </header>
      <FlexMain>{query && <DataFetcher query={query} />}</FlexMain>
    </>
  );
}
