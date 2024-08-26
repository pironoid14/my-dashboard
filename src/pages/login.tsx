import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from 'react-router-dom';

const schema = z.object({ 
  email: z.string().email(),
  password: z.string().min(8)
})
type inputField = z.infer<typeof schema>;
export const Login = () => {
  const {register, handleSubmit, formState: {errors}} = useForm<inputField>({
    resolver: zodResolver(schema)
});
const onSubmit: SubmitHandler<inputField> = data => console.log(data);
  
  return (
    <div className="bg-white h-screen flex justify-center items-center ">
    <form  className="w-full max-w-xs p-6 bg-white rounded-md shadow-lg border-2 border-black" onSubmit={handleSubmit(onSubmit)}>
      <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
  
      <div className="mb-4">
        <label className="block text-gray-700 mb-2" htmlFor="email">Email:</label>
        <input
        {...register("email", { required: true })}
          type="email"
          id="email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
         
        />
       {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
       )}
              </div>
  
      <div className="mb-6">
        <label className="block text-gray-700 mb-2" htmlFor="password">Password:</label>
        <input
        {...register("password", { required: true })}
          type="password"
          id="password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          
        />
       {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
      
       )}
      
          </div>
  
      
      <Link to ="/" ><button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-yellow-600" 
      >
        Login
      </button></Link>
      <Link to="/ForgotPassword"><button type='submit' className="w-full bg-rose-500 text-white px-4 py-2 rounded-md hover:bg-teal-600">Forgot Password </button></Link>
    </form>
  </div>
  
  );
}

export default Login;
