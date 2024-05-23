import './WordDescription.css';
import WordMeaning from '../WordMeaning/WordMeaning';
import Play from '../../assets/play.png';
import Copy from '../../assets/copy.png';
import { toast } from "react-toastify";
import copy from "copy-to-clipboard";

const WordDescription = (props) => {

    const handleAudio = () => props.isAudio === true? props.setAudio(false) : props.setAudio(true);

    const handleCopy = (link) => {
        let copyText = link;

        let isCopy = copy(copyText);

        if(isCopy) {
            toast.success("Copied to clipboard");
        }
    };

    console.log(props);

    return (
        <div className="word-container">
            <div className='flex word-description'>
                <div>
                    <h1>{props.wordData[0].word}</h1>
                    <p>{props.wordData[0].phonetic}</p>
                </div>
                {props.isAudio === true? 
                <audio controls>
                    {props.wordData[0].phonetics.map((element, index) => (<source key={index} src={element.audio} />))}
                </audio> : 
                <button className='play-button' onClick={handleAudio}>
                    <img className='play-icon' src={Play} alt="play" />
                </button> }
                
                
            </div>
              
            {props.wordData[0].meanings.map((element) => ( <WordMeaning key={element.partOfSpeech} meaning={element} /> ))}
        
            <hr />
            <div className='source-container'>
                <p className='source'>Source</p>
                <div className='links-container'>
                    {props.wordData[0].sourceUrls.map((element, index) => (
                        <div className='flex link-container' key={index}>
                            <a href={element}> {element} </a>
                            <button className='copy' onClick={() => handleCopy(element)}>
                                <img src={Copy} alt="copy" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
};

export default WordDescription;