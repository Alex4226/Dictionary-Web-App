import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar';
import SearchInput from './components/SearchInput/SearchInput';
import WordDescription from './components/WordDescription/WordDescription';

const App = () => {
  const [wordData, setWordData] = useState([]);
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [currentFont, setCurrentFont] = useState('serif');

  return ( 
    <div className={`font-${currentFont} ${isDarkTheme === true? "theme-dark" : null } background-container`}>
      <Navbar setDarkTheme={setDarkTheme} setCurrentFont={setCurrentFont} isDarkTheme={isDarkTheme} currentFont={currentFont} />
      <SearchInput setWordData={setWordData} />
      {wordData[0] === undefined? null : ( <WordDescription wordData={wordData}/> ) }
    </div>
   )
};

export default App;