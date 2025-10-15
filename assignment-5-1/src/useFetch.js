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
