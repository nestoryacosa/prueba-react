import { Button } from '@material-tailwind/react';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Banner from '../components/Banner';

const DetailPage = () => {

    const url = 'https://run.mocky.io/v3/945ebc53-6e6c-458f-a54d-78c637ac6d54';// URL de la API
    const { id } = useParams(); // Hook que devuelve un objeto con los parametros de la ruta dinamica
    console.log(id);

    const navigate = useNavigate(); // Hook que devuelve una funcion para navegar a otra ruta

    // vamos a crear un estado para guardar el producto que vamos a mostrar en esta pagina
    const [item, setItem] = useState(null);
    
    
    useEffect( ()=>{

        fetch(url)
            .then( response => response.json() )
            .then( data => {
                const result = data.find( video => video.id === Number(id)) 
                setVideo(result);
            })

    } ,[ id ] )

  return (
    <div>
        <Banner bgImage={'https://img.freepik.com/vector-gratis/coleccion-tiras-pelicula_1017-7088.jpg?size=626&ext=jpg&ga=GA1.2.421966648.1689272464&semt=sph'}>
            <h1 className='text-4xl font-bold text-white'>Detalle de producto</h1>
        </Banner>
        <p>Id pasado por parámetro: { id }</p>

        {
            video ? 
            <ul>
                <li>Id: { video.id }</li>
                <li>Nombre: { video.title.es }</li>
                <li>Descripción: { video.description }</li>
                
                <li> <img className='w-80 h-52 rounded-xl object-cover' src={video.image} alt="" /> </li>
            </ul>
            : <h6>Cargando video...</h6>
        }

        <Button color="blue" onClick={ ()=> navigate('/videos') }>Volver</Button>
    </div>
  )
}

export default DetailPage