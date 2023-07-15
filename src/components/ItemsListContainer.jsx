import { useEffect, useState } from 'react';

// Este componente será el encargado de mostrar los productos que se encuentran en el catálogo. (smart component)
const ItemsListContainer = () => {
    const URL = 'https://ghibli-api-v1.azurewebsites.net/api/v1/movies'; // URL de la API
    const [video, setVideo] = useState([]); // Estado inicial de items es un array vacío
    

    
    useEffect( ()=>{ 
         fetch(URL)
          .then( response => response.json() ) 
          .then( data => setVideo(data) ) 
          .catch( error => console.log(error) ) // error es el error que se produjo en la petición
    }, [] ) 


  return (
    <div className=''>

      <div className='my-16 flex flex-wrap justify-center gap-6'>
        {
          video.length > 0 
            ? video.map( video => <Item key={video.id} product={video}/> )
            : <h6>Esperando respuesta de la api de videos...</h6> 
        }
      </div>

    </div>
  )
}

export default ItemsListContainer