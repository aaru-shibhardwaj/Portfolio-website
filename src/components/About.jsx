import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-xl mt-20'>
            I'm a dedicated React developer with a passion for crafting high-quality web applications. With a solid background in JavaScript and an in-depth understanding of modern web technologies, I specialize in creating dynamic, responsive, and user-friendly interfaces.
             </p>
             <br/>
             <p className='text-xl'>I started my journey in web development a couple of years ago, driven by a fascination with how technology can enhance user experiences. Over time, I have mastered various front-end technologies, with React standing out as my preferred framework due to its power and versatility.</p>
             
        </div>
    </div>
  )
}

export default About