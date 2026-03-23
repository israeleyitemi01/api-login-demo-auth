import { useState } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState('eve.holt@reqres.in'); // valid Reqres email
  const [password, setPassword] = useState('cityslicka');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://reqres.in/api/login', {
        email,
        password,
      });

      // Mock role assignment for demo
      const role = email.includes('admin') ? 'admin' :
                   email.includes('staff') ? 'staff' : 'customer';

      const user = { email, role };

      
      login(res.data.token, user);
      navigate('/dashboard');
    } catch (err) {
      alert('Login failed. Try with eve.holt@reqres.in');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>User Login</h2>
      <input className='border-2 border-black'  type="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <br></br>
      <input className='border-2 border-black'  type="password" value={password} onChange={e => setPassword(e.target.value)} required />
      <br></br>
      <button className='border-2 border-black cursor-pointer'  type="submit">Login</button>
    </form>
  );
};

export default Login;

