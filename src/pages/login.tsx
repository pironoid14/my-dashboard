
import {useState} from 'react'
import { Link } from 'react-router-dom';


export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  
const validate = () => {
  const errors: { [key: string]: string } = {};
  if (!email) {
    errors.email = "Email is required";
  }
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email)) {
    errors.email = "Invalid email address";
  }
  if (!password) {
    errors.password = "Password is required";
  }
  else if (password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }
  return errors;

}

const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
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
    <div className="bg-amber-300 h-screen flex justify-center items-center border-2 border-gray-300 rounded-md">
    <form  className="w-full max-w-xs p-6 bg-white rounded-md shadow-lg">
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
  
      <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600" 
      onSubmit={handleSubmit}>
        Login
      </button>
      <Link to ="/home"></Link>
    </form>
  </div>
  
  );
}

export default Login;
