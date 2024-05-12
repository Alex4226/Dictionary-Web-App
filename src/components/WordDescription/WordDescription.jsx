import './WordDescription.css';
import WordMeaning from '../WordMeaning/WordMeaning';
import Play from '../../assets/play.png';
import Copy from '../../assets/copy.png';
import { toast } from "react-toastify";
import { useRef } from "react";
import copy from "copy-to-clipboard";

const WordDescription = (props) => {

    const handleCopy = () => {
        let copyText = props.wordData[0].sourceUrls;

        let isCopy = copy(copyText);

        if(isCopy) {
            toast.success("Copied to clipboard");
        }
    };

    return (
        <div className="word-container">
            <div className='flex word-description'>
                <div>
                    <h1>{props.wordData[0].word}</h1>
                    <p>{props.wordData[0].phonetic}</p>
                </div>
                <button className='play-button'>
                    <img className='play-icon' src={Play} alt="play" />
                </button>
            </div>
            
              
            {props.wordData[0].meanings.map((element) => ( <WordMeaning key={element.partOfSpeech} meaning={element} /> ))}
        
            <hr />
            <div className='source-container'>
                <p className='source'>Source</p>
                <div className='flex'>
                    <a href={props.wordData[0].sourceUrls}> {props.wordData[0].sourceUrls} </a>
                    <button className='copy' onClick={handleCopy}>
                        <img src={Copy} alt="copy" />
                    </button>
                </div>
            </div>
        </div>
    )
};

export default WordDescription;