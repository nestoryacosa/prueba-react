import Banner from "../components/Banner"
import ItemsListContainer from "../components/ItemsListContainer"

const VideoPage = () => {
  return (
    <main>        
        <Banner bgImage={'https://img.freepik.com/vector-gratis/coleccion-tiras-pelicula_1017-7088.jpg?size=626&ext=jpg&ga=GA1.2.421966648.1689272464&semt=sph'}>
            <h1 className="text-5xl font-semibold">Videos</h1>
        </Banner>
        
        <p>En la pagina de videos</p>
        <ItemsListContainer />
    </main>
  )
}

export default VideoPage