import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom'


function Home() {
    const [e, setE] = useState('Coding')
    const [count, setCount] = useState(0)

    useEffect(() => {
        document.title = `You clicked ${count} times`
    }, [count])

    useEffect(() => {
        const words = ['Technology', 'Designing', 'Developing', 'IoT']
        let i = 0
        setInterval(() => {
            setE(words[i])
            i = (i + 1) % words.length
        }, 1500)
    }, [])




return (
    <div className='bg-slate-700 w-screen h-screen min-w-full min-h-full'>
            <div className='w-screen h-screen gap-20 grid grid-cols-1 md:grid-cols-2 justify-center items-center p-4'>
                    <div className='text-left ml-10'>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl'>So, I am <mark>Harsh Gupta</mark></h1>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl'>And I Love</h1>
                            <p className='text-6xl md:text-7xl lg:text-8xl' id='mypassion'>{e}</p>
                           
                    </div>

                    <div className='grid justify-center'>
                            <img src="https://github.com/harsh-gupta-10/my-portfolio/blob/main/public/img/temp-logo.png?raw=true" alt="" 
                            className="w-full max-w-xs md:max-w-md lg:max-w-lg rounded-2xl"/>    
                    </div> 
            </div>
    </div>
)
}

export default Home