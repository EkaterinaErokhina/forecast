import Weather from './Weather';
import s from './Main.module.css';

const Main = (props) => {
    return(
        <div className = {s.main}>
            <Weather 
            name = {props.currentGeo.name} 
            temp = {props.currentGeo.temp}
            weather = {props.currentGeo.weather}
            feels_like = {props.currentGeo.feels_like}
            icon = {props.currentGeo.icon} />

            {props.locations.map( location =>  
                <Weather
                deleteCity = {props.deleteCity}

                name = {location.name} 
                temp = {location.temp}
                weather = {location.weather}
                feels_like = {location.feels_like}
                icon = {location.icon} />
            )}

            {props.isModal 
            ? <button className = {s.modalButton} onClick = { () => props.setIsModal(false) }>-</button>
            : <button className = {s.modalButton} onClick = { () => props.setIsModal(true) } >+</button>}
        </div>
    )
}

export default Main;