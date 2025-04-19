// src/components/Pricing.jsx
export default function Pricing() {
    const plans = [
      {
        title: "Starter",
        price: "$9/mo",
        features: ["1 meal/day", "Order from 11am to 9pm", "Free delivery"],
      },
      {
        title: "Complete",
        price: "$19/mo",
        features: ["2 meals/day", "Order 24/7", "Priority support"],
      },
    ];
  
    return (
      <section className="bg-orange-50 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-black">Eating well without breaking the bank</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {plans.map((plan, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4 text-black">{plan.title}</h3>
                <p className="text-3xl font-bold mb-6 text-black">{plan.price}</p>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {plan.features.map((feat, j) => (
                    <li key={j}>✔ {feat}</li>
                  ))}
                </ul>
                <button className="bg-orange-500 text-white px-6 py-3 rounded-full hover:bg-orange-600 transition">
                  Choose plan
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
  