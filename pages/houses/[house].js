import React from 'react'
import Link from 'next/link'
import CharCardShort from '../../components/CharCardShort'
const HouseName = ({data})=>{
    
    return(
        <div className='grid grid-cols-4 px-12  my-12 '>
            {data.map((char)=>
              {return( <CharCardShort key={char.id} name={char.name} id={char.id} image={char.image} /> )}
            )}
            
        </div>
    )
}

export async function getServerSideProps({params}) {
  // Fetch data from external API
  console.log(params)
  const { house } = params
  console.log(house)
  const res = await fetch(`https://hp-api.onrender.com/api/characters/house/${house}`)
  const data = await res.json()
  console.log(data)

  // Pass data to the page via props
  return {props:{house:house, data:data} }
}

export default HouseName