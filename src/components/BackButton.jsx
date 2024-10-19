import React from 'react';
import { useNavigate } from 'react-router-dom';


const BackButton = ({navigateTo}) => {

    const navigate = useNavigate();

    return (
        <button className="mt-4 bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded" onClick={() => navigate(navigateTo)}>
            Back
        </button>
    );
};

export default BackButton;