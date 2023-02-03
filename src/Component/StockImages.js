import React, { useState } from 'react'
import axios  from 'axios';
import './StockImage.css'

const StockImages = () => {
     const [image,setImage] = useState('')
     const [data,setData] = useState([])

    const photoHandler=()=>{
        axios.get(`https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=qNlDK_xWq_kM6LY00BWrpgB6WlEbPWJ7Dht93-aJCGs`)
        .then((res)=>{
            // console.log(res.data)
            setData(res.data.results)
        })
       
    }

  return (
    <>
    <div className='main'>
        <input type='text' placeholder='Search here for the images.....' value={image} onChange={(e)=>{
            setImage(e.target.value)
        }}/> <br/>
        <button type='submit' onClick={photoHandler} >Get Photo</button>
    </div>
    <div className='photo'>
        {data.map((value)=>{
            return(
                <img src={value.urls.small} alt=''/>
            )
        })}
    </div>
    </>
  )
}

export default StockImages