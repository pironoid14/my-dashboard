
import { Link } from "react-router-dom";


 export const Navbar = () => {
  return (
    <div className="bg-white border-2 border-y-black">
      <nav className='grid grid-cols-3 border-solid underline-offset-2'>
        <div className="justify-start ">
      <h1 className="text-rose-900 font-bold  p-4 ">Journal</h1>
      </div>
      <div className=" flex justify-center  ">
        <ul className='flex space-x-4 p-4 '>
          <li>Home</li>
          <li >about</li>
          <li >feature</li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
        </div>
        <div className=" flex justify-end p-4 ">
          <ul className=" flex space-x-4">
      <li className='text-rose-700'> <Link to ="/register"> Register</Link></li>
      <li className="text-rose-700"> <button className="border-rose-800 border-2 rounded-lg  "><Link to ="/login"> Login</Link></button></li>
        </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
