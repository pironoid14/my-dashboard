
import { Link } from "react-router-dom";


 export const Navbar = () => {
  return (
    <div className="bg-white p-4">
      <nav className='grid grid-cols-3 border-solid underline-offset-2'>
        <div className="justify-start ">
      <h1 className="text-rose-900 font-bold  p-4 ">Journal</h1>
      </div>
      <div className=" flex justify-center p-4">
        <ul className='flex space-x-4 '>
          <li>Home</li>
          <li >about</li>
          <li >feature</li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
        </div>
        <div className=" flex justify-end p-4 ">
          <ul className=" flex space-x-4">
      <li> <Link to ="/register"> Register</Link></li>
      <li> <button className="rounded-full hover:divide-rose-800"><Link to ="/login"> Login</Link></button></li>
        </ul>
        </div>

      </nav>
    </div>
  )
}

export default Navbar
