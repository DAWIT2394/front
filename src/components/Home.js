import React from 'react';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      <header className="bg-gray-800 text-white py-6">
        <h1 className="text-3xl text-center">Welcome to Our Website!</h1>
      </header>
      <main className="flex-grow container mx-auto p-4">
        <section className="bg-white shadow-md rounded-lg p-6 mb-6">
          <h2 className="text-2xl font-semibold">About Us</h2>
          <p className="mt-2 text-gray-700">
            We are committed to providing the best service possible. Our team is dedicated and passionate about what we do.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold">Our Services</h2>
          <ul className="mt-2 list-disc list-inside text-gray-700">
            <li>Service 1</li>
            <li>Service 2</li>
            <li>Service 3</li>
          </ul>
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-4">
        <p className="text-center">&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;
