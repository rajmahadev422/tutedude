# useFetch
[Frontend Link](https://unrivaled-dieffenbachia-312c80.netlify.app/)

## How to Start
```
npm i 
npm run dev
```
## Hook Code

```js
export async function useFetch(url) {
  let loading = true;
 try {
    const res = await fetch(url);

    const urlData = await res.json();
    loading = false;
    const data = {urlData, error: null, loading};
    return data;
  } catch (err) {
    loading = false;
    const data = {error: err.message, urlData: null, loading};
    return data;
  }
}
```
## Features
- return data format if there is no error
```js
data = {
  urlData,
  error: null,
  loading
}
```
- return data format if there is error
```js
data = {
  urlData: null,
  error: err.message,
  loading
}
```
