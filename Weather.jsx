import React, { useEffect, useState } from 'react'
import './Weather.css'
import search_icon from '../assets/search.png'
import search_icon from '../assets/rainy.jpg'
import search_icon from '..assets/windy.jpg'


const Weather =() =>{

    const [Weather, setWeather] =useState(false);
     const search =async (city)=>{
        try{
            const url='https://api.openweathermap.org/data/2.5/weather?q=${city}&uniits=metric&appid=${import.meta.env.VITE_APP_ID';
            const Response =await fetch(url);
            const data =await Response.jason();
            console.log(data);
            setWeather({
               temperature:  data.main.temp
            })
            Weather(

            )

        }catch(error){

        }
    }

    

    useEffect(()=>{
        search("Clgary");
    },[])




    return(
        <div className='weather'>
            <div className="search-bar">
                <input type ="text" placeholder='Search'/>
                <img src={search_icon} alt=" "/>
            </div>
            <img src={rainy_icon}alt=" "className='weather-icon'/>
            <p className='temperature'>16 degree</p>
            <p className='Location'>Calgary</p>
            <div className= "weather-data">
                <div className="col">
                    <img src={rainy_icon}alt=" "/>
                    <div>
                        <p>91%</p>
                        <span>Rainy</span>
                    </div>
                </div>
                <div className="col">
                    <img src={windy_icon}alt=" "/>
                    <div>
                        <p>3.6km/h</p>
                        <span>Wind Speed </span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Weather()
