import { Link } from "react-router-dom";





export const Home = () => {
  return (
    <div>
      <nav className='bg-amber-300 grid grid-cols-3'>
        <div className="justify-start ">
      <h1 className="text-rose-900 font-bold  p-4 ">Journal</h1>
      </div>
      <div className="justify-center p-4">
        <ul className='flex space-x-4 '>
          <li>Home</li>
          <li >about</li>
          <li >feature</li>
          <li>Docs</li>
          <li>Pricing</li>
        </ul>
        </div>
        <div className="justify-end">
        <Link to ="/login"> Login</Link>
        <Link to ="/register"> Register</Link>
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
    </div>
  )
}

export default Home;
