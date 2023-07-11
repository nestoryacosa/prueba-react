import { Link } from "react-router-dom"


const Header = ()=> {

    return (
        <header className="w-full">
            <div className="flex justify-between items-center p4 max-w-[1200px] mx=auto">
                <nav>
                    <ul className="flex items-center gap-6">
                        <li>
                            <Link to="/">Home</Link> 
                        </li>
                        <li>
                            <Link to="/videos">Vídeos</Link> 
                        </li>

                    </ul>
                </nav>


            </div>




        </header>
    )
}

export default Header