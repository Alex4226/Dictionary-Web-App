import './WordMeaning.css'

const WordMeaning = (props) => {
    console.log(props);
    return (
        <div className="meaning-container">
            <div className="part-of-speech">
                <p> {props.meaning.partOfSpeech} </p>
                <hr />
            </div>
            <p className='meaning'>Meaning</p>
            <ul>
                {props.meaning.definitions.map((element) => (
                    <div className='definition-container'>
                        <div className='list-item'>
                            <li> {element.definition} </li>
                        </div>
                        { element.example !== undefined ? 
                        <p className='example'> "{element.example}" </p>
                        : null
                        }
                    </div>
                ))}
            </ul>
            
            {props.meaning.synonyms.length > 0 ? (
                <div className='synonyms-container'>
                    <p>Synonyms</p>
                    <div className='synonyms-list'>
                        {props.meaning.synonyms.map((element) => (
                            <p> {element} </p>
                        ))}
                    </div>
                </div>
            ) : null}

            {props.meaning.antonyms.length > 0 ? (
                <div className='synonyms-container'>
                    <p>Antonyms</p>
                    <div className='synonyms-list'>
                        {props.meaning.antonyms.map((element) => (
                            <p> {element} </p>
                        ))}
                    </div>
                </div>
            ) : null}

        </div>
    )
};

export default WordMeaning;