'use client';
import Image from "next/image";
const ExploreBtn = () => {
  return (
    <button 
    id="explore-btn"
    className="mt-7 mx-auto" 
     onClick={()=> console.log('click')}>
     <a href="#events">Explore Btn</a>
     <Image src="/icons/arrow-down.svg" alt="arrow" width={24} height={24}/>
     </button>
  )
}

export default ExploreBtn
