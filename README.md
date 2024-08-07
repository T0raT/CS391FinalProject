## Adding spoonacular API key using vite dotenv
[Official documentation](https://vitejs.dev/guide/env-and-mode)

Create a `.env.local` file.
   - In Vite, using `.env.local` automatically ensures git ignores it unlike using `.env`
   - Add a variable for your api key `VITE_API_KEY=insert api key here` in `.env.local`

```jsx
/ * the VITE_ prefix is necessary for vite to to expose the api key in client */

// Example api keys in .env.local
VITE_API_KEY=09ej03918g0287h
VITE_RANDOM_KEY=168hnf18gy198ghy9

// Calling the api key in react
const apiKey = import.meta.env.VITE_API_KEY;
```
