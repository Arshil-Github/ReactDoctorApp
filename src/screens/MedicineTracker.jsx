import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Heading from '../components/Heading';
import BackButton from '../components/BackButton';

const MedicineTracker = () => {
  const [routines, setRoutines] = useState([
    { drugName: "Drug 1", intakeTime: "10:00 AM" },
    { drugName: "Drug 2", intakeTime: "12:00 PM" },
    { drugName: "Drug 3", intakeTime: "2:00 PM" },
  ]);

  const [completedRoutines, setCompletedRoutines] = useState([]);

  useEffect(() => {
    // Set initial completed routines based on your logic (e.g., from local storage)
    setCompletedRoutines([]);
  }, []);

  const handleCheckboxChange = (routineIndex) => {
    const updatedCompletedRoutines = [...completedRoutines];
    if (updatedCompletedRoutines.includes(routineIndex)) {
      updatedCompletedRoutines.splice(updatedCompletedRoutines.indexOf(routineIndex), 1);
    } else {
      updatedCompletedRoutines.push(routineIndex);
    }
    setCompletedRoutines(updatedCompletedRoutines);
  };

  const navigate = useNavigate();

  return (
    <div className="container mx-auto py-8">
      <Heading text="Medicine Tracker" />
      <div className="">

        {routines.map((routine, index) => (

          <div key={index} className="flex items-center mt-3 mb-3 h-10 justify-between bg-violet-400 border-2 border-black pr-5">

            <label className="ml-2 text-lg font-mono">{routine.drugName} - {routine.intakeTime}</label>

            
            <input type="checkbox" checked={completedRoutines.includes(index)} onChange={() => handleCheckboxChange(index)} className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600' />

          </div>

        ))}

      </div>
      
        <BackButton navigateTo="/features" />

    </div>
  );
};

export default MedicineTracker;