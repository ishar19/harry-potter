import Link from "next/link";
import Image from 'next/image'
export default function Home() {
  return (
   <>
    <p className="text-center font-extrabold text-3xl my-12 text-gray-900">Explore the world of Harry Potter.</p>
    <p className="text-center text-xl font-extrabold my-12 text-gray-900"><Link href='/characters' >See All Characters</Link></p>
    <div>
    <p className="text-center text-xl font-extrabold my-12 text-gray-900"><Link href='/characters'>Explore Characters from Houses</Link></p>
        <ul className="text-center flex justify-evenly text-xl my-12 font-extrabold text-gray-900">
            <Link href='/houses/gryffindor'><li>Gryffindor
            <Image src='/gryffindor.jpeg' width={200} height={200}/>
            </li></Link>
            <Link href='/houses/slytherin'> <li>Slytherin</li>
            <Image src='/slytherin.jpeg' width={200} height={200}/>
            </Link>
            <Link href='/houses/ravenclaw'> <li>Ravenclaw</li>
            <Image src='/ravenclaw.jpeg' width={200} height={200}/>
            </Link>
            <Link href='/houses/Hufflepuff'><li>Hufflepuff</li>
            <Image src='/hufflepuff.jpeg' width={200} height={200}/>
            </Link>
        </ul>
    </div>
   </>
  )
}
