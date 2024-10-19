import './App.css'
import HomePage from './screens/homePage';
import Features from './screens/Features';
import MyInformation from './screens/MyInfo';
import TalkToAI from './screens/TalkToAI';
import MedicineTracker from './screens/MedicineTracker';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const route = createBrowserRouter([
    {
      path:"/",
      element:<HomePage />
    },
    {
      path:"/features",
      element:<Features />
    },
    {
      path:"/myinfo",
      element:<MyInformation />
    },
    {
      path:"/ai",
      element:<TalkToAI />
    },
    {
      path:"/tracker",
      element:<MedicineTracker />
    }
  ]); // Use the useStore hook to access the store

  return (
    <div className='h-full w-full min-h-screen flex justify-center items-center bg-purple-900 pt-10'>
      <div className='p-10 border-2 border-black min-h-[90vh] w-[80vw] bg-violet-300 shadow-md shadow-black'>
        
      <RouterProvider router={route}/>
      </div>
    </div>
  )
}
export default App
