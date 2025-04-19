// src/components/Footer.jsx
export default function Footer() {
    return (
      <footer className="bg-gray-900 text-white py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-sm">&copy; {new Date().getFullYear()} Omnifood. All rights reserved.</p>
        </div>
      </footer>
    );
  }
  