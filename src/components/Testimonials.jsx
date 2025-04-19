import React from "react";

// Import 9 food images
import img1 from "../assets/food1.jpg";
import img2 from "../assets/food2.jpg";
import img3 from "../assets/food3.jpg";
import img4 from "../assets/food4.jpg";
import img5 from "../assets/food5.jpg";
import img6 from "../assets/food6.jpg";
import img7 from "../assets/food7.jpg";
import img8 from "../assets/food8.jpg";
import img9 from "../assets/food9.jpg";

export default function Testimonials() {
  const reviews = [
    {
      name: "Dave Bryson",
      text: "Inexpensive, healthy and great-tasting meals, without even having to order manually! It feels truly magical.",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Ben Hadley",
      text: "The AI algorithm is crazy good, it chooses the right meals for me every time. It's amazing not to worry about food anymore!",
      avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    },
    {
      name: "Steve Miller",
      text: "I’ve been eating better and saving so much time! This app is a game changer.",
      avatar: "https://randomuser.me/api/portraits/men/85.jpg",
    },
    {
      name: "Hannah Smith",
      text: "Delicious meals, effortless experience. I absolutely love it.",
      avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    },
  ];

  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

  return (
    <section className="bg-orange-50 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Testimonials */}
        <div>
          <h2 className="text-orange-600 font-semibold uppercase mb-2">Testimonials</h2>
          <h3 className="text-4xl font-bold text-black mb-10">
            Once you try it, you can't go back
          </h3>

          <div className="grid sm:grid-cols-2 gap-8">
            {reviews.map((r, i) => (
              <div key={i}>
                <div className="flex items-center gap-4 mb-3">
                  <img
                    src={r.avatar}
                    alt={r.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <h4 className="font-semibold text-black">{r.name}</h4>
                </div>
                <p className="text-gray-800 text-sm">{r.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-3 gap-3">
          {images.map((img, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg shadow-md transition-transform duration-300 transform hover:scale-105"
            >
              <img
                src={img}
                alt={`testimonial food ${index + 1}`}
                className="w-full h-32 sm:h-36 md:h-40 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
