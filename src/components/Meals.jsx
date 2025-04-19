// src/components/Meals.jsx
import meal1 from "../assets/meal-1.jpg";
import meal2 from "../assets/meal-2.jpg";

export default function Meals() {
  const meals = [
    {
      name: "Japanese Gyozas",
      img: meal1,
      calories: 650,
    },
    {
      name: "Avocado Salad",
      img: meal2,
      calories: 400,
    },
  ];

  return (
    <section className="bg-orange-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-12 text-center text-black">Meals we offer</h2>
        <div className="grid md:grid-cols-2 gap-12">
          {meals.map((meal, i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-md">
              <img src={meal.img} alt={meal.name} className="rounded-md mb-4" />
              <h3 className="text-xl font-semibold">{meal.name}</h3>
              <p className="text-gray-600">{meal.calories} calories</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
