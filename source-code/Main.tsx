import React from 'react'
import './styles/index.scss'

export const Main = () =>{
    return <div className='main-div'>
       <div className='intro'>
            <div className='text-box'>
                <h1><span className='welcome'>ReactJs</span> <span className='typescript'>in TypeScript</span></h1>
            </div>
            <div>
                <h2>Running in "{process.env.NODE_ENV}" Environmnet</h2>
            </div>
       </div>
    </div>
}