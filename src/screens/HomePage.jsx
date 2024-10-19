import React from 'react';
import Button from '../components/Button';
import Heading from '../components/Heading';

import { useNavigate } from 'react-router-dom';


const HomePage = () => {

    const navigate = useNavigate();

    return (
        <div className='text-center h-full flex flex-col justify-between'>
          <div>
            <Heading text={"Welcome to Drug Doctor"} />

            <p className='text-justify mb-6'>
              This is a web application that helps you track your illness. It is powered by AI.his is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AI
              his is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AI

              <br/>
              his is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AIhis is a web application that helps you track your illness. It is powered by AI
            </p>
          </div>

          <Button text={"Next"} onClick={()=>{
            navigate('/features');
          }} />

        </div>
    );
};

export default HomePage;