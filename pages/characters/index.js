
import React,{useEffect, useState} from 'react'
import CharCardShort from '../../components/CharCardShort'
const CharacterInfo=()=>{
    const [data, setData] = useState([])
    console.log(data)
    useEffect(()=>{
        const getData =async(id)=>{
        const res = await fetch('https://hp-api.onrender.com/api/characters')
        const data = await res.json()
        // console.log(data)
        setData([...data])
    }
        
        getData();
    },[])
    return(
       <div className='grid grid-cols-4 px-12  my-12 '>
            {data.map((char)=>
              {return( <CharCardShort key={char.id} name={char.name} id={char.id} image={char.image} /> )}
            )}
            
        </div>
    )
}

export default CharacterInfo