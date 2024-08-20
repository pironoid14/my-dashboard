
import {useState} from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
const validate = () => {
  const perrors: { [key: string]: string } = {};
  if (!email) perrors.email = "Email is required";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) perrors.email = "Invalid email address";
  if (!password) perrors.password = "Password is required";
  else if (password.length < 8) perrors.password = "Password must be at least 8 characters";
  return perrors;
}

const handleLogin = (e: React.FormEvent) => {
  e.preventDefault();
  const ring = validate();
  
  if (Object.keys(errors).length > 0) {
    setErrors(ring);; 
  } else {
    setErrors({});
    console.log({email, password});
  }
  
}
  return (
    <div className="bg-white h-screen flex justify-center items-center ">
    <form  className="w-full max-w-xs p-6 bg-white rounded-md shadow-lg border-2 border-black ">
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
  
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email}</span>}
      </div>
  
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <span className="text-red-500 text-sm">{errors.password}</span>}
      </div>
  
      
      <Link to ="/" ><button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600" 
      onSubmit={handleLogin}>
        Login
      </button></Link>
    </form>
  </div>
  
  );
}

export default Login;
