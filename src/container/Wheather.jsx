import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../Styles/wheather.css'
import logo from '../assets/logo.jpeg'

const Wheather = () => {

    const [city, setCity] = useState("")
    const [dataValue, setdataValue] = useState({})


    const getApi = async (cityname) => {
        const API_KEY = "e6a7e99c63d46f3edea44d4b72377547"

        const api_irls = await "https://api.openweathermap.org/data/2.5/weather?q=" + cityname + "&appid=" + API_KEY

        await axios.get(api_irls).then((res) => {
            // console.log(res.data)
            setdataValue(res.data)

        }).catch((err) => {
            console.log(err)
        })
    }

    const serchCityName = () => {
        getApi(city)
    }

    useEffect(() => {
        getApi("Warangal")
    }, [])

    return (
        <div className='container'>
            <div className='backImgs'>
                <div className='form'>
                    <img src={logo} className="image_logo" alt="logo" />
                    <h1>Wheather App</h1>
                    <input
                        type="text"
                        placeholder='Enter City/Dict Name...'
                        className='inputs'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button className='buttons' onClick={serchCityName}>Search</button>
                </div>
            </div>
            <div className='botom'>
                <i className="fa-solid fa-cloud cls"></i>
                <p className='name'>{dataValue?.name}</p>
                <p>{((dataValue?.main?.temp) - 273.15).toFixed(2)}&deg;C</p>
            </div>
        </div>
    )
}

export default Wheather