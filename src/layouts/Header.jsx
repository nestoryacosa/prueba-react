import { Link } from "react-router-dom";


const Header = () => {




  return (
    <header className="w-full">
      <div className="flex justify-between items-center p-4 max-w-[1200px] mx-auto">
        <img className="w-28" src="https://img.freepik.com/vector-gratis/coleccion-tiras-pelicula_1017-7088.jpg?size=626&ext=jpg&ga=GA1.2.421966648.1689272464&semt=sph" alt="" />

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/videos">Videos</Link>
            </li>

            
          </ul>
        </nav>

      </div>
    </header>
  )
}

export default Header