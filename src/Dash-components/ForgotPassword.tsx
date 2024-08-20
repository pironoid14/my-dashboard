import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Link } from "react-router-dom";
import OTPInput from "react-otp-input";
import { useState } from 'react';

const schema = z.object({ 
    password: z.string().min(8),
    confirmPassword: z.string().min(8),
    otp: z.string().min(6)
})
type inputField = z.infer<typeof schema>;


export const ForgotPassword = () => {
    const [otp,setOtp] =useState<string>("");
    const {register, handleSubmit, setValue, formState: {errors}} = useForm<inputField>({
        resolver: zodResolver(schema)
    });
    const otpChange = (otp:string)=>{
        setOtp(otp);
        setValue('otp',otp);
    };

    const onSubmit: SubmitHandler<inputField> = data => console.log(data);
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
    <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
      < form action="" onSubmit={handleSubmit(onSubmit)}  className="space-y-6">
      <div>
        <label htmlFor="" className="block text-gray-700 font-semibold mb-2">Otp</label>
        <OTPInput
                  value={otp}
                  onChange={otpChange}
                  numInputs={6}
                  renderSeparator={<span className="mx-1">-</span>} 
                  renderInput={(props) => <input {...props} className="border p-2 rounded-md text-center w-12" />}
                   inputStyle= "w-full text-center"
              containerStyle="flex justify-between"
                        />                
              </div>
              <div>
            <label htmlFor="password" className="block text-gray-700 font-semibold mb-2">New Password</label>
            <input
              type="password"
              id="password"
              {...register("password", { required: "Password is required" })}
              className={`mt-1 block w-full p-2 border ${errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.password && (
              <span className="text-red-500 text-sm mt-1">{errors.password.message}</span>
            )}
          </div>
              
              <div>
            <label htmlFor="confirmPassword" className="block text-gray-700 font-semibold mb-2">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword", { required: "Please confirm your password" })}
              className={`mt-1 block w-full p-2 border ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
            />
            {errors.confirmPassword && (
              <span className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</span>
            )}
          </div>
              <button type="submit" className="w-full bg-slate-500 text-white py-2 px-4 rounded-md hover:bg-yellow-600 transition-colors">Change Password</button>
              <Link to ="/login" className="text-xl text-blue-600 mt-5 flex justify-center hover:border-2 hover:bg-emerald-200"> back to Login</Link>
      </form>
    </div>
    </div>
  )
}

export default ForgotPassword
