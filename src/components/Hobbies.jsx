import React from 'react'
import Hobby from '../assets/Hobbies.png';
import Theatre from '../assets/Theatre.png';

const Hobbies = () => {
    const hobby=[
   {
    id:1,
    content:(
        <>Acting</>
    ),
    src:Hobby,
    style:"shadow-yellow-500",
    
   },
   {
    id:2,
    content:(
        <>Mimicry</>
    ),
    src:Theatre,
    style:"shadow-yellow-500"
   },
   {
    id:3,
    content:(
       <div>
       <p>My achievements</p>
       </div> 
            
        
    ),
    href:"/iim certificate.jpeg",
    style:"rounded-br-md shadow-yellow-500",
    download:true,
   },




    ]
  return (
    
    <div
    name="hobbysec"
    className='bg-gradient-to-b from-gray-800 to-black w-full h-screen'>
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-white '>Hobbies</p>
                <p className="py-6 text-gray-400">These are some of my hobbies</p>
            </div>


            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>
            
               {hobby.map(({id,src,style,content,href,download})=>
                <div
                   key={id}
                   className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                   <img src={src} alt="" className='w-20 mx-auto '/>
                   <li>
                    <a 
                    href ={href}
                    className='flex justify-center items-center w-full text-white'
                    download={download}
                    target='_blank'
                    rel='noreferrer'>
                    {content}

                    </a>
                    </li>
                  


                </div>
               
               
               )}
                
            </div>
        </div>
    </div>
  )
}

export default Hobbies