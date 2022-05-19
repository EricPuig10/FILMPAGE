import { Component} from "react";

export class MovieInfo extends Component{
    render(){
        return <div className="filmInfoCont">
            <div className="textCont">
                <h1>Uncharted</h1>
                <h2>Sinopsis</h2>
                <p>Basada en una de las series de videojuegos más vendidas y aclamadas por la crítica de todos los tiempos, "Uncharted" presenta a un joven, astuto y carismático, Nathan Drake (Tom Holland) en su primera aventura como cazatesoros con su ingenioso compañero Victor “Sully” Sullivan (Mark Wahlberg). En una aventura de acción que se extiende por todo el mundo, ambos se embarcan en una peligrosa búsqueda de “el mayor tesoro nunca antes encontrado” al tiempo que rastrean las claves que les podrían conducir al hermano de Nathan, perdido hace ya mucho tiempo.</p>
                
            </div>

            <div className="imageCont">
                <img src="https://assets-prd.ignimgs.com/2022/01/13/uncharted-poster-full-1642086040683.jpg" alt="fotoUncharted"/>
            </div>


        </div>
    }
    }