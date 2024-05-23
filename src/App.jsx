import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import SearchInput from './components/SearchInput/SearchInput';
import WordDescription from './components/WordDescription/WordDescription';

const App = () => {
  const [wordData, setWordData] = useState([]);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [currentFont, setCurrentFont] = useState('serif');
  const [isAudio, setAudio] = useState(false);

  return ( 
    <div className={`font-${currentFont} ${isDarkTheme === true? "theme-dark" : null } background-container`}>
      <div className='app-container'>
        <Navbar setDarkTheme={setDarkTheme} setCurrentFont={setCurrentFont} isDarkTheme={isDarkTheme} currentFont={currentFont} />
        <SearchInput setWordData={setWordData} isAudio={isAudio} setAudio={setAudio} />
        {wordData[0] === undefined? null : ( <WordDescription wordData={wordData} isAudio={isAudio} setAudio={setAudio} /> ) }
      </div>
    </div>
   )
};

export default App;