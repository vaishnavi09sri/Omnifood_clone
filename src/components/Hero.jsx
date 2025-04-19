// src/components/Hero.jsx
import heroImg from '../assets/hero.webp';

export default function Hero() {
  return (
    <section className="bg-amber-50 overflow-hidden py-12 md:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
          {/* Text Content */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-800 leading-tight mb-6">
              A healthy meal delivered to your door, every single day
            </h1>
            <p className="text-lg text-slate-700 mb-8">
              The smart 365-days-per-year food subscription that will make you eat healthy again.
              Tailored to your personal tastes and nutritional needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="bg-slate-800 text-white px-8 py-3 rounded-md font-semibold hover:bg-slate-700 transition">
                Start eating well
              </button>
              <button className="text-orange-500 px-6 py-3 font-semibold hover:text-orange-600 transition">
                Learn more ↓
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2 mt-10 md:mt-0">
            <div className="relative mx-auto md:mr-0">
              <img
                src={heroImg}
                alt="Healthy food"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
