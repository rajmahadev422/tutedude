import useFetch from "./useFetch";
import Card from "./components/Card";
import Loader from "./components/Loader";
import Header from "./components/Header";

function App() {
  const { data, loading, error } = useFetch(
    "https://api.escuelajs.co/api/v1/products"
  );

  if (loading) return <Loader />;
  console.log(data);
  if (error) return <p>Error: {error}</p>;

  return (
    <>
    <Header />
      <div className="min-h-screen bg-gray-50 flex flex-wrap gap-6 justify-center items-center p-6">
        {data.map((item, i) => (
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
