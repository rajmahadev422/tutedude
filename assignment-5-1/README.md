# useFetch
[Frontend link](https://sparkling-dodol-08bc93.netlify.app/)
## How to start
```
npm i
npm run dev
```
## Features
- return data format if there is no error
```js
data = {
  urlData,
  error: null
}
```
- return data format if there is error
```js
data = {
  urlData: null,
  error: err.message
}
```
## Hook Code

```js
export async function useFetch(url) {
 try {
    const res = await fetch(url);

    const urlData = await res.json();
    const data = {urlData, error: null}
    return data;

  } catch (err) {
    const data = {error: err.message, urlData: null}
    return data;
  }
}
```
