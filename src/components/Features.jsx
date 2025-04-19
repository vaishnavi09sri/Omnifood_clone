// src/components/Features.jsx
export default function Features() {
    const features = [
      {
        title: "Never cook again!",
        text: "Our subscriptions cover 365 days of meals. Cook less, live more.",
      },
      {
        title: "Local and organic",
        text: "All ingredients are sourced from local, organic farms. No compromise.",
      },
      {
        title: "No waste",
        text: "Everything is portioned to your needs — zero food waste.",
      },
      {
        title: "Pause anytime",
        text: "Vacation? Business trip? Pause or cancel anytime, hassle-free.",
      },
    ];
  
    return (
      <section className="bg-white py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-16 text-black">Why choose Omnifood?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {features.map((f, i) => (
              <div key={i} className="text-left">
                <h3 className="text-xl font-semibold mb-2">{f.title}</h3>
                <p className="text-gray-600">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
}
