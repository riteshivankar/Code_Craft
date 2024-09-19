import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About </p>
            </div> 
            <p className='text-xl mt-20'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae neque doloribus, perspiciatis dolorem nemo atque voluptatum autem alias dolorum nam deserunt impedit numquam iusto, obcaecati ex cupiditate maiores! Nulla laudantium minima asperiores corrupti architecto veniam? Rem veritatis aliquid eaque nisi unde quasi sunt quo! Et unde blanditiis laudantium fugiat quod!</p>
            <br />
            <p className='text-xl'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores id tenetur magnam unde alias dolore mollitia harum numquam, esse itaque commodi cum at expedita repudiandae nesciunt sunt fugit! Harum dolorem doloremque enim suscipit, consectetur explicabo dolore neque perspiciatis ea ad cupiditate repellat minima aliquid. Incidunt laborum cumque nostrum debitis?
            </p>
            
        </div>
    </div>
  )
}

export default About