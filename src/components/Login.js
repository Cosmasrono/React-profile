import React, { useState } from 'react';
import Cookies from 'universal-cookie';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
  const cookies = new Cookies();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic here
    setLogin(true); // Example: Setting login to true for demonstration purposes
    cookies.set('TOKEN', 'dummy-token', {
      path: '/',
    });
    window.location.href = '/auth';
  };

  return (
    <div className="login bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Login</h2>

      {/* Display success or error message */}
      {login ? (
        <p className="text-green-500 mb-4">You are logged in successfully!</p>
      ) : (
        <p className="text-red-500 mb-4">Login failed.</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* email */}
        <div className="mb-4">
          <label htmlFor="email" className="block mb-2 font-semibold">Email address</label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* password */}
        <div className="mb-4">
          <label htmlFor="password" className="block mb-2 font-semibold">Password</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full py-2 px-4 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-400"
          />
        </div>

        {/* submit button */}
        <button
          type="submit"
          className="bg-indigo-500 text-white rounded-md py-2 px-4 hover:bg-indigo-600 focus:outline-none focus:ring focus:ring-indigo-400"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
