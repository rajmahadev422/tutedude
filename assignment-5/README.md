# 🪝 useFetch — Custom React Hook

`useFetch` is a reusable **custom React Hook** designed to handle API data fetching efficiently.  
It simplifies the logic of fetching, loading states, and error handling inside React components.

Live Demo link: [React App](https://velvety-platypus-38ae08.netlify.app/)
---

## 🚀 Features
- ✅ Handles API requests with built-in loading and error states  
- ✅ Automatically cleans up when components unmount  
- ✅ Simple and reusable across multiple components  
- ✅ Works with any REST API endpoint  

---

## 🧠 Why Use It?

Instead of writing repetitive `useEffect` and `useState` logic in every component to fetch data,  
you can abstract that logic into one place — `useFetch`.

This makes your components **cleaner**, **easier to maintain**, and **less error-prone**.

---

## ⚙️ Installation

You don’t need any external dependency. Just create a new file:


Paste the code below 👇

---

## 🧩 Hook Code

```javascript
import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((res) => {
        if (!res.ok) setError("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
         setData(data);
      })
      .catch((err) => {
        setError(err.message);
      })
      .finally(() => {
         setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
}

export default useFetch;
