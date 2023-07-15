
import { createContext, useState } from 'react';

export const VideoContext = createContext([]); // creo el contexto y lo exporto para usarlo en otros componentes
   
export const VideoProvider = ({children}) => { // creo el provider y lo exporto para usarlo en otros componentes

    const [video, setVideo] = useState([]); // creo el estado inicial del carrito

 
    
    

    return (
        <VideoProvider value={{
            // aca van los valores que quiero compartir
            video,
            setVideo
        }}>
            {children}
        </VideoProvider>
    )
    
}

