
import { useEffect } from 'react';
import './App.css';
import Activity from './components/Activity/Activity';


function App() {
  useEffect( () =>{
    console.log('mounting...')
  },[])
  return (
    <div>
      
      
    <Activity></Activity>



    </div>
  );
}

export default App;