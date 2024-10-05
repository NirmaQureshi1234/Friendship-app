"use client"; // Marks this as a client-side component

import { useState } from "react";
import './page.module.css'; // Import global CSS for styling

const Home: React.FC = () => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.toLowerCase() === 'afsheen') {
      setMessage(`Happy Friendship, Miss Afsheen! Thank you for being a wonderful teacher and a great friend.`);

    } else {
      setMessage(`Please enter the correct name.`);
    }
  };

  return (
    <div className="container">
      <div className="background">
        <h1>Happy Friandship!</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <button type="submit">Generate Message</button>
        </form>
        {message && <p className="message">{message}</p>}
      </div>
    </div>
  );
};

export default Home;
