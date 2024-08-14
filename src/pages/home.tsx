import { Link } from "react-router-dom";


export const Home = () => {
  return (
    <div>
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
      <li> <button className="rounded-full"><Link to ="/login"> Login</Link></button></li>
        </ul>
        </div>

      </nav>
      <section>
        <div>
          <h2 className="text-2xl text-center font-bold mt-4">Write your daily Journal and <br/> read them in an exciting way</h2>
          <p className="text-xl mt-4 text-center">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Sed quia eius fuga id maxime consequuntur mollitia corrupti eaque voluptates debitis quas illo <br/> ipsum sunt laborum, numquam maiores facere a est.</p>
        </div>
        <div className="flex justify-center ">
         <button className="p-4  mt-4 rounded-full bg-rose-900">Get Started</button>
        </div>
      </section>

      <section className="grid grid-cols-4  gap-2 ">
        <div className="bg-purple-800 rounded-xl ">
          <h1>Cycling and <br/> enjoy the city view</h1>
        </div>
        <div className="bg-slate-700 rounded-xl">
          <h1>Street <br/> Photography <br/> Journal</h1>
        </div>
        <div className="bg-gray-500 rounded-xl">
          <h1>My first trip with my partner</h1>
        </div>
        <div className="bg-stone-400 rounded-xl">
          <h1>First day at office, very nervous</h1>
        </div>
      </section>
    </div>
  )
}

export default Home;
