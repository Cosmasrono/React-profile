import React, { useState } from 'react';

const Register = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    };

    fetch('https://nodejs-mongodb-auth-app.herokuapp.com/register', requestOptions)
      .then((response) => {
        if (response.ok) {
          setRegister(true);
          alert(`${email} is registered successfully!`)
        } else {
          throw new Error('Registration failed.');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="register bg-gray-100 py-4 px-6">
      <h2 className="text-2xl font-bold mb-4">Register</h2>

      {/* Display success or error message */}
      {register ? (
        <p className="text-green-500 mb-4">You are registered successfully!</p>
      ) : (
        <p className="text-red-500 mb-4">Registration failed.</p>
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
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
