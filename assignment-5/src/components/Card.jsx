
const Card = ({ image, title }) => {
  return (
    <div className="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-100">
      <img
        src={image}
        alt={title}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = "https://i.imgur.com/QkIa5tT.jpeg";
        }}
        className="w-full h-48 object-cover hover:scale-105 transition-transform duration-300"
      />
      <div className="p-5">
        <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
      </div>
    </div>
  );
};

export default Card;

