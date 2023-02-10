import React from 'react'
import {Image} from 'next/image'
import Link from 'next/link'
 const CharCardShort=({id, name, image})=>{
    console.log(image.length>0?image:"")
    return (
        image.length>0?
        <div className='flex flex-col m-4'>
        <img alt={`image of ${name}`} src={image} className="w-[100%] h-[90%]"/>{name}
        </div>
        :<></>
    )
}

export default CharCardShort

