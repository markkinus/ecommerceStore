import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';

function Login() {
  const { user, login, logout } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [email, setEmail] = useState('');

  const redirectTo = location.state?.from || '/';

  function handleSubmit(event) {
    event.preventDefault();
    if (!email.trim()) {
      return;
  }
    login(email);
    navigate(redirectTo, { replace: true });
  };

  if (user) {
    return (
      <div className='p-4 max-w-7xl mx-auto'>
        <h1 className='text-2xl font-bold mb-4'>Welcome.</h1>
        <p className = "text-gray-600">You are logged in as {user.email}.</p>
        <button 
        onClick={logout}
        className="mt-4 block w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-white hover:bg-gray-700">
          Logout
          </button>
      </div>
    );
  }

  return (
    <div className='p-4 max-w-7xl mx-auto'>
      <h1 className='text-2xl font-bold mb-4'>Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input 
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your Email"
        required
        className="w-full p-2 border rounded"
        />
        <button type="submit"
        className="w-full rounded-lg bg-gray-900 px-4 py-2 text-center text-white hover:bg-gray-700">
          Login
        </button>
      </form>
        </div>
  )
}

export default Login