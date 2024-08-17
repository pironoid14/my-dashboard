import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <div className="p-4">
      <div>
          <h2 className="text-2xl text-center font-bold mt-4">Write your daily Journal and <br/> read them in an exciting way</h2>
          <p className="text-xl mt-4 text-center">Lorem ipsum, dolor sit amet consectetur <br/> adipisicing elit. Sed quia eius fuga id maxime consequuntur mollitia corrupti eaque voluptates debitis quas illo <br/> ipsum sunt laborum, numquam maiores facere a est.</p>
        </div>
        <div className="flex justify-center ">
        <Link to ="/register"><button className="p-4  mt-4 rounded-full bg-rose-900 w-40 text-white">Get Started</button></Link> 
        </div>
    </div>
  )
}

export default Hero
