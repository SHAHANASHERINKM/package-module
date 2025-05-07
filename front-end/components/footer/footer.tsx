import React from 'react';

function Footer() {
  return (
    <footer className="bg-[#383837] text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-2xl font-serif ">
          © 2025 Share your knowledge. Inspire the next generation.
        </p>
        <button className="bg-white text-black font-bold py-2 px-4 rounded mt-2 hover:bg-gray-200">
          Start Teaching
        </button>
      </div>
    </footer>
  );
}

export default Footer;