import Search from '../../assets/search.png';
import './SearchInput.css';

const SearchInput = (props) => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const inputValue = formData.get('word');

        const serverResponse = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`);
        const parsedData = await serverResponse.json();

        props.setWordData(parsedData);
    };

    return (
        <form className='search-container' onSubmit={handleSubmit}>
            <input className='input' type="text" name='word' />
            <button className='search-button'>
              <img className='search-image' src={Search} alt="search" />
            </button>
        </form>
    )
};

export default SearchInput;