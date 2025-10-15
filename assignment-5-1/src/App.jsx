import Card from "./components/Card";
import Loader from "./components/Loader";
import Header from "./components/Header";
import { useFetch } from './useFetch';
import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const url = 'https://api.escuelajs.co/api/v1/products';
      const products = await useFetch(url);
      
      setData(products.urlData);
      setError(products.error);
      setLoading(false);
    }
    fetchData();
  },[0]);

  if (loading) return <Loader />;
  if(error) return <p>{error}</p>
  return (
    <>
    <Header />
      <div className="min-h-screen bg-gray-50 flex flex-wrap gap-6 justify-center items-center p-6">
        {data.length == 0 ? <p>No data</p> : data.map((item, i) => (
          <div
            key={i}
            className="flex-1 min-w-[300px]"
            style={{
              animationName: "fade",
              animationDuration: "1s",
              animationDelay: `${i * 100}ms`,
            }}
          >
            <Card
              image={item.category.image}
              title={item.title}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
