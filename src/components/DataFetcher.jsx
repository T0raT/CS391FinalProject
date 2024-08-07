// function used to fetch and display the relevant data needed for each recipe.
// info i want to retireve for each plate are calories, serving, preptime, image, name, ingredients

import useSWR from "swr";
import { ProductCard } from "./ProductCard.jsx";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DataFetcher({ query }) {
  const { data, error } = useSWR(query, fetcher);

  if (!data) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  // (Tiger): Thank you carlos for the sample input
  // <div key={rec.id}>
  //   <h3>{rec.title}</h3>
  //   <h3>{rec.readyInMinutes}</h3>
  //   <h3>{rec.image}</h3>
  //   <h3>{rec.nutrition.nutrients[0].amount}</h3>
  // </div>

  console.log(data);
  return data.results.map((rec) => (
    <ProductCard
      key={rec.id}
      title={rec.title}
      nutrients={rec?.nutrition?.nutrients}
      summary={rec?.summary}
      imgUrl={rec?.image}
      readyInMinutes={rec?.readyInMinutes}
      cuisines={rec?.cuisines}
      diets={rec?.diets}
      instructions={rec.analyzedInstructions[0].steps}
      ingredients ={rec?.nutrition?.ingredients}
    />
  ));
}
