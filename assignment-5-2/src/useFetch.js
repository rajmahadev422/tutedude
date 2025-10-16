export async function useFetch(url) {
  let loading = true;
 try {
    const res = await fetch(url);

    const urlData = await res.json();
    loading = false;
    const data = {urlData, error: null, loading}
    return data;
  } catch (err) {
    loading = false;
    const data = {error: err.message, urlData: null, loading}
    return data;
  } 
}
