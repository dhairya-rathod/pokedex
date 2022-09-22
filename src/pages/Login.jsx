import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../component/UI/Button';
import Input from '../component/UI/Input';

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    localStorage.setItem('authToken', 'ABX123');
    navigate('/home', { replace: true });
  };

  useEffect(() => {
    const authToken = localStorage.getItem('authToken');
    if (authToken) {
      navigate('/home');
    }
  }, []);

  return (
    <div className="h-full flex justify-center items-center">
      <form className="shadow-lg p-4 w-80 rounded-lg text-primary" onSubmit={handleLogin}>
        <h2 className="text-xl font-semibold mb-10">Sign In</h2>
        <Input name="username" placeholder="Username" />
        <Input name="password" placeholder="Password" className="mt-4" />
        <Button type="submit" label="Login" className="mt-8" />
      </form>
    </div>
  );
};

export default Login;
