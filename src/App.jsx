import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import SearchInput from './components/SearchInput/SearchInput';
import WordDescription from './components/WordDescription/WordDescription';

const App = () => {
  const [wordData, setWordData] = useState([]);

  return ( 
    <div>
      <Navbar />
      <SearchInput setWordData={setWordData} />
      {wordData[0] === undefined? null : ( <WordDescription wordData={wordData} /> ) }
    </div>
   )
};

export default App;