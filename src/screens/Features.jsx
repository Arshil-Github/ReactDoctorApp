import React from 'react';
import Button from '../components/Button';
import Heading from '../components/Heading'

import { useNavigate } from 'react-router-dom'
import BackButton from '../components/BackButton';

const Features = () => {
    
    const navigate = useNavigate();

    return (
        <div className='h-full'>
          
            <div className='text-center'>
                <Heading text={"Actions"} />
            </div>

            <div className='flex flex-col p-8'>
                
                <CustomButton text={"Update Info"} onClick={()=>{
                    navigate('/myinfo');
                }} />
                <CustomButton text={"Medicine Tracker"} onClick={()=>{
                    navigate('/tracker');
                }} />
                <CustomButton text={"Talk to Doctor"} onClick={()=>{
                    navigate('/ai');
                }} />
            </div>
            
            <BackButton navigateTo={"/"} />

        </div>
    );
};

const CustomButton = ({text, onClick})=>{
    return (
        <button className='px-4 py-5 bg-blue-500 text-white rounded hover:bg-blue-700 shadow-sm shadow-black mb-6 min-h-[33%]' onClick={()=>{
            onClick()
        }}>
            {text}
        </button>
    )
}


export default Features;