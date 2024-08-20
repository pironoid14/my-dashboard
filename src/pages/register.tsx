import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";



const schema = z.object({ 
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(8)
})

type inputField = z.infer<typeof schema>;

export const Register = () => {
    const {register, handleSubmit, formState: {errors}} = useForm<inputField>({
    resolver: zodResolver(schema)
});

    const onSubmit: SubmitHandler<inputField> = data => console.log(data);
   
    return (
        <div className="bg-white flex justify-center items-center min-h-screen ">
        <form
          action=""
          onSubmit={handleSubmit(onSubmit)}
          className="bg-white p-6 rounded-md shadow-md w-full max-w-sm border-2 border-black "
        >
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 mb-2">
              Username
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              id="name"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <span className="text-red-500 text-sm">{errors.name.message}</span>
            )}
          </div>
      
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 mb-2">
              Email
            </label>
            <input
              {...register("email", { required: true })}
              type="email"
              id="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email.message}</span>
            )}
          </div>
      
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">
              Password
            </label>
            <input
              {...register("password", { required: true })}
              type="password"
              id="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password.message}</span>
            )}
          </div>
      
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors"
          >
            Register
          </button>
          <Link to ="/login" className="text-xl text-blue-600 mt-5 flex justify-center hover:border-2 hover:bg-emerald-200">Login</Link>
        </form>
      </div>
      
    );
}

export default Register;
