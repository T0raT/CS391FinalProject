// function used to fetch and display the relevant data needed for each recipe.
// info i want to retireve for each plate are calories, serving, preptime, image, name, ingredients

import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function DataFetcher({ query }) {
    const { data, error } = useSWR(query, fetcher);

    if (!data) return <p>Loading...</p>;
    if (error) return <p>Error: {error.message}</p>;

    return (
        <div>
            {data.results.map((rec) => (
                <div key={rec.id}>
                    <h3>{rec.title}</h3>
                    <h3>{rec.readyInMinutes}</h3>
                    <h3>{rec.image}</h3>
                    <h3>{rec.nutrition.nutrients[0].amount}</h3>
                </div>
            ))}
        </div>
    );
}

