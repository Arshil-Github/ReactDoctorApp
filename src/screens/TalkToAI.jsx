import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import aIImage from './ai.png';
import Button from '../components/Button';
import BackButton from '../components/BackButton';

const TalkToAI = () => {
  const [userInput, setUserInput] = useState('');
  const [aiResponse, setAIResponse] = useState('');
  const navigate = useNavigate();

  const handleUserInputChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = async (event) => {
    // Handle AI response here
    console.log('User input:', userInput);
    // Replace this with your actual AI logic to process the input and generate a response
    const aiResponse = "Hello there! How can I assist you today?";
    setAIResponse(aiResponse); // Update the AI response state
    setUserInput(''); // Clear the input field
  };

  return (
    <div className="container mx-auto py-8">

      <h1 className="text-3xl font-bold text-center mb-4">Talk to AI</h1>

      <div className="items-center justify-center">
        <div className="mx-auto">
          <textarea className="w-full border rounded-lg px-4 py-2 mb-4" value={userInput} onChange={handleUserInputChange} placeholder="Enter your message here" />

          <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit} text= "Send" />

        </div>
        <div className="mt-4 flex flex-col items-center">
          {/* Replace this with your desired visual representation of the AI */}
          <img src={aIImage} alt="AI" className="w-48 h-48 rounded-full" />
        </div>

        <p className="mt-4">{aiResponse}</p>
      
      </div>
      <BackButton navigateTo="/features" />
    </div>
  );
};

export default TalkToAI;