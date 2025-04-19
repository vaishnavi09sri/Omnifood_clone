import React from "react";

// Importing images from src/assets
import step1Img from "../assets/step1.png";
import step2Img from "../assets/step2.png";
import step3Img from "../assets/step3.png";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      title: "Tell us what you like (and what not)",
      description:
        "Never again waste time thinking about what to eat! Omnifood AI will create a 100% personalized weekly meal plan just for you. It makes sure you get all the nutrients and vitamins you need, no matter what diet you follow!",
      image: step1Img,
    },
    {
      number: "02",
      title: "Approve your weekly meal plan",
      description:
        "Once per week, approve the meal plan generated for you by Omnifood AI. You can change ingredients, swap entire meals, or even add your own recipes.",
      image: step2Img,
    },
    {
      number: "03",
      title: "Receive meals at convenient time",
      description:
        "Best chefs in town will cook your selected meal every day, and we will deliver it to your door whenever works best for you. You can change delivery schedule and address daily!",
      image: step3Img,
    },
  ];

  return (
    <section className="px-6 py-20 max-w-7xl mx-auto text-black">
      <h2 className="font-semibold uppercase mb-4">How it works</h2>
      <h3 className="text-4xl font-bold mb-16">
        Your daily dose of health in 3 simple steps
      </h3>

      <div className="space-y-24">
        {steps.map((step, index) => (
          <div
            key={step.number}
            className={`flex flex-col-reverse md:flex-row items-center gap-10 ${
              index % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="flex-1">
              <span className="text-[72px] font-bold text-black/10 block">
                {step.number}
              </span>
              <h4 className="text-2xl font-semibold mb-4">{step.title}</h4>
              <p>{step.description}</p>
            </div>
            <div className="flex-1">
              <img
                src={step.image}
                alt={`Step ${step.number}`}
                className="w-full max-w-[200px] mx-auto"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
