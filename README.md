## Adding spoonacular API key using vite dotenv
[Official documentation](https://vitejs.dev/guide/env-and-mode)

Create a `.env.local` file.
   - In Vite, using `.env.local` automatically lets git ignore it unlike just `.env`
   - Then add a variable for your api key `VITE_API_KEY=insert api key here`

```jsx
/ * the VITE_ prefix is needed for vite to be able to expose the api key in client */

// Example api keys in .env.local
VITE_API_KEY=09ej03918g0287h
VITE_RANDOM_KEY=168hnf18gy198ghy9

// Calling the api key in react
const apiKey = import.meta.env.VITE_API_KEY;
```
