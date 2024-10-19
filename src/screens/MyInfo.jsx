import React, { useState } from 'react';
import Button from '../components/Button';
import Heading from '../components/Heading';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';

const MyInformation = () => {

    const navigate = useNavigate();

  const [formData, setFormData] = useState({
    userName: '',
    age: '',
    gender: '',
    dnaSequence: '',
    diseaseInfo: '',
    drugRoutine: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData); // For demonstration purposes
  };

  const handleDrugRoutineChange = (index, field, value) => {
    const updatedDrugRoutine = [...formData.drugRoutine];
    updatedDrugRoutine[index][field] = value;
    setFormData({ ...formData, drugRoutine: updatedDrugRoutine });
  };

  const handleAddDrug = () => {
    setFormData({
      ...formData,
      drugRoutine: [...formData.drugRoutine, { drugName: '', intakeTime: '' }]
    });
  };

  const handleRemoveDrug = (index) => {
    const updatedDrugRoutine = [...formData.drugRoutine];
    updatedDrugRoutine.splice(index, 1);
    setFormData({ ...formData, drugRoutine: updatedDrugRoutine });
  };

  return (
    <div className="container mx-auto">

        <div className='text-center'>
            <Heading text="My Information"/>
        </div>

        <form onSubmit={handleSubmit} className="mx-auto">

            <div className="mb-4">
                <label htmlFor="userName" className="block text-gray-700 font-bold mb-2">Username</label>
                <input type="text" id="userName" className="w-full border rounded-lg px-4 py-2" value={formData.userName} onChange={(e) => setFormData({ ...formData, userName: e.target.value })} required />
            </div>

            <div className="mb-4">
                <label htmlFor="age" className="block text-gray-700 font-bold mb-2">Age</label>
                <input type="number" id="age" className="w-full border rounded-lg px-4 py-2" value={formData.age} onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
            </div>


            <div className="mb-4">

                <label htmlFor="gender" className="block text-gray-700 font-bold mb-2">Gender</label>

                <select id="gender" className="w-full border rounded-lg px-4 py-2" value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} required>
                    <option value="">Select Gender</option>
                    <option value="M">Male</option>
                    <option value="F">Female</option>
                </select>

            </div>


            <div className="mb-4">
                <label htmlFor="dnaSequence" className="block text-gray-700 font-bold mb-2">DNA Sequence</label>
                <textarea id="dnaSequence" className="w-full border rounded-lg px-4 py-2" value={formData.dnaSequence} onChange={(e) => setFormData({ ...formData, dnaSequence: e.target.value })} />
            </div>

            <div className="mb-4">
                <label htmlFor="diseaseInfo" className="block text-gray-700 font-bold mb-2">Disease Name</label>

                <input type="number" id="diseaseInfo" className="w-full border rounded-lg px-4 py-2" value={formData.diseaseInfo} onChange={(e) => setFormData({ ...formData, age: e.target.value })} required />
            </div>
            
            <div className="mb-4">

                <label htmlFor="drugRoutine" className="block text-gray-700 font-bold mb-2">Medicine Routine</label>

                <div className="space-y-4">
                    {formData.drugRoutine.map((drug, index) => (
                    <div key={index} className="flex flex-col space-y-2">

                        <label htmlFor={`drugName${index}`} className="block text-gray-700 font-bold mb-2">Drug Name</label>

                        <input type="text" id={`drugName${index}`} className="w-full border rounded-lg px-4 py-2" value={drug.drugName} onChange={(e) => handleDrugRoutineChange(index, 'drugName', e.target.value)} required />

                        <label htmlFor={`intakeTime${index}`} className="block text-gray-700 font-bold mb-2">Intake Time</label>
                        <input type="datetime-local" id={`intakeTime${index}`} className="w-full border rounded-lg px-4 py-2" value={drug.intakeTime} onChange={(e) => handleDrugRoutineChange(index, 'intakeTime', e.target.value)} required />

                        <button type="button" className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => handleRemoveDrug(index)}>Remove</button>
                    </div>
                    ))}

                    <button type="button" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={handleAddDrug}>Add Drug</button>

                </div>
            </div>

            <div className='text-center min-w-full '>
                <Button text="Submit" type="submit" onClick={()=>{
                    navigate('/features');
                }}/>
            </div>

        </form>

        <BackButton navigateTo="/features" />
    </div>
  );
};

export default MyInformation;