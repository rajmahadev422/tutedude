# useFetch
[Frontend Link](https://joyful-conkies-20bd1a.netlify.app/)

## How to Start
```
npm i 
npm run dev
```
## Hook Code

```js
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(url);

        const products = await response.json();
        setData(products);
        setLoading(false);
      } catch (err) {
        setLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
```
## Features
- return data
```
{
  data,
  loading,
  error
}
```
